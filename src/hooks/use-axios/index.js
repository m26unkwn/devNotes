import {useState,useEffect} from "react"
import axios from "axios"
export const useAxios = ({
  method = "get",
  url,
  property = null,
  headers = null,
  body = null,
}) => {
  const [response, setResponse] = useState();
  const { setLoading } = useToast();
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios({ method, url, body, headers });
        setResponse(property ? data[property] : data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [response, error];
};
