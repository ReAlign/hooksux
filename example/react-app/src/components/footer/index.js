import React, { useContext } from 'react';

import './index.css';

import { getContext } from 'hooksux-test';

export default () => {
    const { state = {}, dispatch } = useContext(getContext().DAbout);
    const { basic = {} } = state;

    const xEvt = () => {
        const texts = 'textssss';

        dispatch({
          type: 'update',
          payload: {
            basic: {
              texts,
            },
          }
        });
      };

    return (
        <footer className="m-footer">
            <p>{basic.texts}</p>
            <button onClick={xEvt}>change texts</button>
        </footer>
    );
};
