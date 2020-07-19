import React, { useContext } from 'react';
import logo from './logo.svg';
import './index.css';

import { getContext } from 'hooksux-test';

function App() {
    const { state = {}, dispatch } = useContext(getContext().Data);
    const { basic = {} } = state;

    const xEvt = () => {
        const text = '111';

        dispatch({
          type: 'update',
          payload: {
            basic: {
              text,
            },
          }
        });
      };

    return (
        <header className="m-header">
            <img src={logo} className="m-header-logo" alt="logo" />
            <p>{basic.text}</p>
            <button onClick={xEvt}>change text</button>
        </header>
    );
}

export default App;
