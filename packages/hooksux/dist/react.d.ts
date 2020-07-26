import { IF_STATE, IF_REDUCERS, IF_OPTIONS } from './types/types';
export declare const initStore: (reducers: IF_REDUCERS, oriState?: IF_STATE, options?: IF_OPTIONS) => any;
export declare const getContext: () => any;
export declare const deepMerge: (targetObj: any, sourceObj: any) => any;
