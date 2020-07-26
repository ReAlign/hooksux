# hooksux

> Simple global store manager for react hooks.
>
> hooks 版 react 轻量数据管理器

## Install

```bash
# install
npm install hooksux -S
```

## Notes

It's implementation principle is [useContext-useReducer-hooks][path-of-useContext-useReducer-hooks].

## API

### initStore

> Instantiation
>
> 实例化

```js
import { initStore } from 'hooksux';

initStore(reducers: any, oriState?: any, options?: any);
```

#### reducers

| Key       | Required | Default      | Note                    |
|-----------|----------|--------------|-------------------------|
| name      | Yes      | ''           | Name of store, must be the unique |
| reducer   | No       | [oriReducer] | Your custom reducer               |
| initState | No       | {}           | Initial structure of store        |

#### oriState

Origin state, default is `{}`.

#### options

| Key       | Required | Default      | Note      |
|-----------|----------|--------------|-----------|
| cover     | No       | false        | Cover existing store when call `initStore`. Common scene is spa-route-switch |

### getContext

> Get context, dispatch
>
> 获取内容，更新内容

```js
import React, { useContext } from 'react';
import { getContext } from 'hooksux';

const {
  state = {},
  dispatch,
} = useContext(getContext().Data);
```

## Usage

> The demo using the react by default, rax in the same way.
>
> 默认示例使用 react，rax 同理。

### App.js

```js
import React, { useMemo } from 'react';
import Child from './Child';
import { initStore } from 'hooksux';
import Data from './data';

export default () => {
  const Provider = useMemo(() => initStore(
    Data,
    {
      Data: {
        basic: {
          text: 'some text.'
        },
      }
    }
  ), []);

  return (
    <Provider>
      <div className="App">
        <Child />
      </div>
    </Provider>
  );
};
```

### data.js

```js
export default {
  name: 'Data',
  initState: {
    basic: {
      text: ''
    },
  },
};
```

### Child

```js
import React, { useContext } from 'react';

import { getContext } from 'hooksux';

export default () => {
  const {
    state = {},
    dispatch,
  } = useContext(getContext().Data);
  const updateTextEvt = () => {
    dispatch({
      type: 'update',
      payload: {
        basic: {
          text: 'after update.',
        },
      }
    });
    // `payload` can be array.
    // When it's array, `dispatch` will call `type` in turn for array's item.
  };
  return (
    <div className="Child">
      <p>{state.basic.text}</p>
      <button onClick={updateTextEvt}>Update text</button>
    </div>
  );
};
```

## Extends

### oriReducer

```js
export default (state, action) => {
  const {
    type = '',
    payload = {},
  } = action;

  switch (type) {
    case 'update':
      state = _.deepMerge(state, payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};
```

You can use custom `reducer` write by yourself:

```js
export default (state, action) => {
  const {
    type = '',
    payload = {},
  } = action;

  switch (type) {
    case 'case1':
    case 'case2':
    default:
      return state;
  }
};
```

Then set `Data = { name, reducer: YourReducer, initState, }`.

## Releases

### 0.1.x

#### 0.1.0

* publish first `Full Version`

[path-of-useContext-useReducer-hooks]:https://github.com/ReAlign/hooksux/tree/master/docs/useContext-useReducer-hooks.md
