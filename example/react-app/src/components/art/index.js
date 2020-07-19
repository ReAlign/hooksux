import React, { useContext } from 'react';
import './index.css';
import { getContext } from 'hooksux-test';

export default () => {
  const { state = {} } = useContext(getContext().Data);
  const xx = () => {
    console.log(state);
  };
  return (
    <div className="m-art">
      <p>ART - {state.basic.text}</p>
      <button onClick={xx}>show text</button>
    </div>
  );
};
