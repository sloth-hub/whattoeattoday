import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now()); // 숫자가 바뀌면 refetch를 갖게되고 trigger는 바뀌고, 그럼 useEffect는 다시 실행됨
  };

  useEffect(() => {
    if (trigger !== null) {
      axiosInstance(opts).then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
        .catch(error => {
          setState({ ...state, loading: false, error });
        });
    }
  }, [trigger]);

  return { ...state, refetch };

};

export default useAxios;
