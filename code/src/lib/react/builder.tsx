import { IF_OBJ_ANY, IF_STATE } from '../../types/types';

import React, { createElement, createContext, useReducer } from 'react';
import builder from '../common/builder';

export default function (name: string, reducer: any, initState: IF_STATE) {
    const r: IF_OBJ_ANY = {
        React,
        createElement,
        createContext,
        useReducer,
    };
    return builder(r, name, reducer, initState);
};
