import axios from "axios";
import { useState, useCallback } from "react";

const useGetMethod = ({
  token = undefined,
  tokenType = "Bearer",
  headersConfig = {},
} = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(null);

  let updatedResponse = null;
  let updatedError = null;

  const getData = useCallback(
    async ({ url: apiUrl, onSuccess, onError }) => {
      setIsLoading(true);
      setUrl(apiUrl);

      const headers = {
        "Content-Type": "application/json",
        ...headersConfig,
      };

      if (token) {
        headers.Authorization = `${tokenType} ${token}`;
      }

      try {
        const axiosConfig = {
          method: "GET",
          url: apiUrl,
          headers,
        };

        const res = await axios(axiosConfig);

        if (res.status >= 200 && res.status < 300) {
          updatedResponse = res;

          if (onSuccess && typeof onSuccess === "function") {
            onSuccess(res);
          }
        } else {
          updatedError = res;
          if (onError && typeof onError === "function") {
            onError(res);
          }
        }
      } catch (err) {
        updatedError = err;
        if (onError && typeof onError === "function") {
          onError(err);
        }
      } finally {
        setIsLoading(false);
      }
      return { error: updatedError, response: updatedResponse };
    },
    [token, tokenType, headersConfig]
  );

  const refetch = useCallback(() => {
    if (url) {
      getData({
        url,
      });
    }
  }, [getData, url]);

  return {
    getData,
    isLoading,
    refetch,
  };
};

export default useGetMethod;
