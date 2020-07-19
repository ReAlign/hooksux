import { IF_OBJ_ANY, IF_STATE } from '../../types/types';

export default function (
  r: IF_OBJ_ANY,
  name: string,
  reducer: any,
  initState: IF_STATE
) {
  const {
    React = null,
    createElement,
    createContext,
    useReducer,
  } = r;
  const Context = createContext({});

  const Provider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
      <Context.Provider value={{ state, dispatch }}>
        {props.children}
      </Context.Provider>
    );
  };

  return { Context, Provider, name };
};
