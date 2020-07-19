import {
    IF_STATE,
    IF_REDUCERS,
    IF_OPTIONS,
    IF_OBJ_ANY,
} from '../../types/types';

import _ from '../_';

const reducerList: any[] = [];
const Context: IF_OBJ_ANY = {};

/**
 * @name  initStore 初始化 store
 * @param {*} reducers reducers
 * @param {*} oriState 原始数据
 * @param {*} options 配置
 */
export const _initStore = (
    c: any,
    reducers: IF_REDUCERS,
    oriState: IF_STATE = {},
    options: IF_OPTIONS = {},
): any => {
    const {
        builder,
        createProvider,
        oriReducer,
    } = c;
    const {
        name = '',
        reducer = oriReducer,
        initState = {},
    } = reducers || {};

    const {
        code = 0,
        msg = '',
    } = _.checkParams(reducers, Context, options);
    if (code === 0) {
        const _initState = _.deepMerge(initState, oriState[name] || {});
        const _reducers = builder(name, reducer, _initState);

        Context[_reducers.name] = _reducers.Context;
        reducerList.push(_reducers);
    } else {
        console.error(msg);
    }

    const providers = reducerList.map(r => r.Provider);
    const Provider = createProvider(providers);
    return Provider;
};

export const _getContext = (): any => Context;