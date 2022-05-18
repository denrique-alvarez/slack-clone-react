import { useState, useEffect } from "react";

const useFetch = (url, message) => {
  // useState to set data, error and loading status.
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect to run fetching function every time url or message arguments are updated.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(encodeURI(url));
        const json = await response.json();

        setData(json);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, message]);

  // return data, error and loading status as object
  return { data, error, loading };
};

// export function
export default useFetch;
