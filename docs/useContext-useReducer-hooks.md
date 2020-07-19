# Principle

```js
// 1. 创建 context
const Context = createContext({});

// 2. 创建 Provider 组件
//    组件包裹的所有子组件都可以通过调用 Context 访问到 value
const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
      <Context.Provider value={{ state, dispatch }}>
        {props.children}
      </Context.Provider>
    );
};
```
