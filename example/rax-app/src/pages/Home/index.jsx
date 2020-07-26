import { createElement, useMemo } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

import Logo from '../../components/Logo';

import { initStore } from 'hooksux-rax';
import DAbout from './data';

export default function Home() {
  const Provider = useMemo(() => initStore(
     // { name, reducer, initState }
    DAbout,
    { // 初始化数据
      DAbout: {
        basic: {
          uri: '//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png',
          txt: 'img'
        },
      }
    }
  ), []);
  return (
    <Provider>
      <View className="home">
        <Logo />
        <Text className="title">Welcome to Your Rax App</Text>
        <Text className="info">More information about Rax</Text>
        <Text className="info">Visit https://rax.js.org</Text>
      </View>
    </Provider>
  );
}
