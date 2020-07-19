import { IF_STATE, IF_REDUCERS, IF_OPTIONS } from './types/types';
import _ from './lib/_';
import { _initStore, _getContext } from './lib/common/index';
import oriReducer from './lib/common/reducer';

import builder from './lib/react/builder';
import createProvider from './lib/react/provider';

export const initStore = (
    reducers: IF_REDUCERS,
    oriState: IF_STATE = {},
    options: IF_OPTIONS = {}
): any => {
    const r: any = { builder, createProvider, oriReducer, };
    return _initStore(r, reducers, oriState, options);
};
export const getContext = (): any => _getContext();
export const deepMerge = (targetObj: any, sourceObj: any): any => _.deepMerge(targetObj, sourceObj);