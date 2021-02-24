import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";

const App = () => {
  const apiCall = axios
    .get("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
    .then((res) => {
      const data = res.data;
      return data;
    });

  useEffect(() => {
    apiCall.then((response) => console.log(response));
  }, []);

  return (
    <>
      Hello typescript option here
      <div className="hello">
        <h1>Hey</h1>
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default App;
