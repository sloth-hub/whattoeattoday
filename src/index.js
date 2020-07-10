import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { firebaseConfig } from "./config";
import useAxios from "./hooks/useAxios";


const App = () => {

  const { loading, data, error, refetch } = useAxios({
    url: `${firebaseConfig.databaseURL}/.json`
  });
  console.log(
    `Loading : ${loading} \nError : ${error} \nData : ${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
