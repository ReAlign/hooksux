import React, { useMemo } from 'react';
import './App.css';

import Header from '../components/header';
import Art from '../components/art';

import { initStore } from 'hooksux-test';
import Data from './app.reducer';

export default () => {
  const Provider = useMemo(() => initStore(
    // reducer
    Data, // { name, reducer, initState }
    { // 初始化数据
      Data: {
        basic: {
          text: 'qwe'
        },
      }
    },
    {
      cover: true,
    }
  ), []);

  return (
    <Provider>
      <div className="App">
        <Header />
        <Art />
      </div>
    </Provider>
  );
};
