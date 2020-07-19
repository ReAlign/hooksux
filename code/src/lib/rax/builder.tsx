import { IF_OBJ_ANY, IF_STATE } from '../../types/types';

import { createElement, createContext, useReducer } from 'rax';
import builder from '../common/builder';

export default function (name: string, reducer: any, initState: IF_STATE) {
    const r: IF_OBJ_ANY = {
        createElement,
        createContext,
        useReducer,
    };
    return builder(r, name, reducer, initState);
};
