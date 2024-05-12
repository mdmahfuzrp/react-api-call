import axios from "axios";
import { useState } from "react";

const useSubmitMethod = ({
  token = undefined,
  tokenType = "Bearer",
  headersConfig = {},
} = {}) => {
  const [isLoading, setIsLoading] = useState(false);

  let updatedResponse = null;
  let updatedError = null;

  const handleSubmit = async ({
    url,
    data,
    method = "POST",
    onSuccess,
    onError,
    refetch,
  }) => {
    setIsLoading(true);

    const headers = {
      "Content-Type": "application/json",
      ...headersConfig,
    };

    if (token) {
      headers.Authorization = `${tokenType} ${token}`;
    }

    try {
      const axiosConfig = {
        method,
        url,
        headers,
        data,
      };

      const res = await axios(axiosConfig);

      if (res.status >= 200 && res.status < 300) {
        const jsonResponse = res;
        updatedResponse = jsonResponse;

        if (onSuccess && typeof onSuccess === "function") {
          onSuccess(jsonResponse);
        }

        if (refetch) {
          refetch();
        }
      } else {
        const errorResponse = res || "Request failed";
        updatedError = errorResponse;
        if (onError && typeof onError === "function") {
          onError(errorResponse);
        }
      }
    } catch (err) {
      const errorResponse = err || "Request failed";
      updatedError = errorResponse;
      if (onError && typeof onError === "function") {
        onError(errorResponse);
      }
    } finally {
      setIsLoading(false);
    }

    return { error: updatedError, response: updatedResponse };
  };

  return {
    handleSubmit,
    isLoading,
  };
};

export default useSubmitMethod;
