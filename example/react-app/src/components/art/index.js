import React, { useContext } from 'react';
import './index.css';
import { getContext } from 'hooksux';

export default () => {
  const { state = {} } = useContext(getContext().Data);
  const xx = () => {
    console.log(state);
  };
  return (
    <div className="m-art">
      <p>ART - {state.basic.text} - {state.basic.num}</p>
      <button onClick={xx}>show Data</button>
    </div>
  );
};
