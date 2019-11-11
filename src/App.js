import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Counter from "./components/Counter";
import dataReducer from "./reducers/dataReducer";

const initData = {
  list: [],
  error: null
};

const App = ({ title }) => {
  const [counter, setCounter] = useState(0);
  const [data, dispatch] = useReducer(dataReducer, initData);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=react`)
      .then(res => {
        dispatch({ type: "SET_LIST", list: res.data.hits });
      })
      .catch(() => dispatch({ type: "SET_ERROR" }));
  }, []);

  return (
    <div id="App">
      <header>{title}</header>
      <h1>My COunter JEst</h1>
      <Counter counter={counter} />
      <div>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </div>
      <h1>hello</h1>

      <h2>My Async data</h2>
      <ul>
        {data.list.map(item => {
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
