import { useState } from "react";
import axios from "axios";

const useDeleteMethod = ({
  token = "",
  tokenType = "Bearer",
  headersConfig = {},
} = {}) => {
  // some of state for getting loading state response and errors
  const [isDeleting, setIsDeleting] = useState(false);

  // delete function
  const handleDelete = async ({
    url,
    refetch,
    onSuccess,
    onError,
    method = "DELETE",
  }) => {
    //   state value set before operation
    setIsDeleting(true);

    // headers
    const headers = {
      "Content-Type": "application/json",
      // you can also put down your own headers config here
      ...headersConfig,
    };

    // if secretName is available then headers authorization will be set
    if (token) {
      headers.Authorization = `${tokenType} ${token}`;
    }

    try {
      // axios config for request
      const axiosConfig = {
        method: method,
        url: `${url}`,
        headers,
      };

      const res = await axios(axiosConfig);

      if (res.status >= 200 && res.status < 300) {
        const jsonResponse = res;

        // if request successful and you passed the success receiver function
        if (onSuccess && typeof onSuccess === "function") {
          onSuccess(jsonResponse);
        }
        if (refetch) {
          refetch();
        }
        return jsonResponse;
      } else {
        const errorResponse = res;
        //   if have any error issue and you passed the error receiver function
        if (onError && typeof onError === "function") {
          onError(errorResponse);
        }
        return errorResponse;
      }
    } catch (err) {
      if (onError && typeof onError === "function") {
        onError(err);
      }
      return err;
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    handleDelete,
    isDeleting,
  };
};

export default useDeleteMethod;
