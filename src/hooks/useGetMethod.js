import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const useGetMethod = ({
  apiUrl = null,
  token,
  tokenType = "Bearer",
  headersConfig = {},
} = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(apiUrl);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(
    async (apiUrl, shouldSetLoading = true) => {
      if (shouldSetLoading) {
        setIsLoading(true);
      }

      const headers = {
        "Content-Type": "application/json",
        ...headersConfig,
      };

      if (token) {
        headers.Authorization = `${tokenType} ${token}`;
      }

      try {
        const res = await axios.get(apiUrl, { headers });

        if (res.status >= 200 && res.status < 300) {
          setResponse(res);
          setError(null);
        } else {
          setError(res);
          setResponse(null);
        }
      } catch (err) {
        setError(err);
        setResponse(null);
      } finally {
        if (shouldSetLoading) {
          setIsLoading(false);
        }
      }
    },
    [token, tokenType, headersConfig]
  );

  const refetch = useCallback(
    (shouldSetLoading = false) => {
      if (url) {
        getData(url, shouldSetLoading);
      }
    },
    [getData, url]
  );

  useEffect(() => {
    if (url) {
      getData(url);
    }
  }, [url]);

  return {
    setUrl,
    isLoading,
    response,
    error,
    refetch,
  };
};

export default useGetMethod;
