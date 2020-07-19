import React, { useMemo } from 'react';
import './About.css';

import Footer from '../components/footer';

import { initStore } from 'hooksux-test';
import DAbout from './about.reducer';

export default () => {
  const Provider = useMemo(() => initStore(
    // reducer
    DAbout, // { name, reducer, initState }
    { // 初始化数据
      DAbout: {
        basic: {
          texts: 'about'
        },
      }
    }
  ), []);

  return (
    <Provider>
      <div className="About">
        <Footer />
      </div>
    </Provider>
  );
};
