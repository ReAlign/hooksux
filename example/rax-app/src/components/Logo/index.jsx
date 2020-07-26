import { createElement, useContext } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
import Image from 'rax-image';

import './index.css';

import { getContext } from 'hooksux-rax';

export default () => {
  const { state = {}, dispatch } = useContext(getContext().DAbout);
  const {
    basic = {},
  } = state;
  console.log(state);

  const clickEvt = () => {
    dispatch({
      type: 'update',
      payload: [
        {
          basic: {
            uri: 'https://img.alicdn.com/tfs/TB18Xm_q5_1gK0jSZFqXXcpaXXa-34-34.svg',
          },
        },
        {
          basic: {
            txt: 'image',
          },
        }
      ]
    });
  };

  return (
    <View>
      <Image
        className="logo"
        source={{uri: basic.uri}}
      />
      <Text onClick={clickEvt}>
        {basic.txt}
      </Text>
    </View>
  );
};
