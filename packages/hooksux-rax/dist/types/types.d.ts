interface OBJ_ANY {
    [propName: string]: any;
}
export interface IF_OBJ_ANY extends OBJ_ANY {
}
export interface IF_TOOLS {
    typeOf(o: any): string;
    isObject(o: any): boolean;
    isArray(o: any): boolean;
    isNull(o: any): boolean;
    isUndefined(o: any): boolean;
    deepMerge(targetObj: any, sourceObj: any): any;
    checkParams(reducers: IF_REDUCERS, Context: IF_OBJ_ANY, options: IF_OPTIONS): IF_CHECK_RES;
}
export interface IF_STATE extends OBJ_ANY {
}
export interface IF_REDUCERS {
    name: string;
    reducer: Function;
    initState: OBJ_ANY;
}
export interface IF_OPTIONS {
    cover?: boolean;
}
export interface IF_CHECK_RES {
    code: number;
    msg: string;
}
export interface IF_ACTION {
    type: string;
    payload: OBJ_ANY;
}
export {};
