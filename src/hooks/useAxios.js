import defaultAxios from "axios";
import { useState, useEffect } from "react";


const useAxios = (opts, axiosInstance = defaultAxios) => {

  useEffect(() => {
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
  }, []);

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  if (!opts.url) {
    return;
  }

  return { ...state};

};

export default useAxios;
