import axios from "axios";
import { useState } from "react";

const useSubmitMethod = ({
  token = "",
  tokenType = "Bearer",
  headersConfig = {},
} = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async ({ url, data, method = "POST", onSuccess }) => {
    setIsLoading(true);
    setResponse(null);
    setError(null);

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
        const jsonResponse = res.data;
        setResponse(jsonResponse);

        if (onSuccess && typeof onSuccess === "function") {
          onSuccess(jsonResponse);
        }
      } else {
        const errorResponse = res.data || "Request failed";
        setError(errorResponse);
      }
    } catch (err) {
      setError(err.response.data || "Request failed");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    response,
    error,
  };
};

export default useSubmitMethod;
