// interface IN_CACHE {
//   [propName: string]: [];
// }

// type IN_TYPE_NUMaARR_or_BOOL = [number, number] | boolean;

// export interface IF_OBJ_MATCH {
//   match(targetStr: string, keyword: string): IN_TYPE_NUMaARR_or_BOOL;
// }

// export interface IF_OBJ_STRING {
//   [propName: string]: string;
// }

// export interface IF_OBJ_UTIL {
//   cache: IN_CACHE;
//   wordDuyinsMap: IF_OBJ_STRING;
//   getPinyin(cn: string): string[];
//   wordBreak(s: string): string[];
//   getAllSolutions(start: number, s: string, result: string[], solutions: string[], possible: boolean[]): void;
//   getFullKey(key: string): string[];
//   point2point(test: string, key: string, last: boolean, extend: boolean): boolean;
//   getIndex(py: string[], fullString: string[][], keyword: string): IN_TYPE_NUMaARR_or_BOOL;
// }

// export interface IF_MAIN {
//   so(targetStr: string, keyword: string): IN_TYPE_NUMaARR_or_BOOL;
// }

// export interface IF_PYS_OPTIONS {
//   [propName: string]: any;
// }

// obj any
interface OBJ_ANY {
  [propName: string]: any;
}

// tool
export interface IF_OBJ_ANY extends OBJ_ANY {}

// tool
export interface IF_TOOLS {
  typeOf(o: any): string,
  isObject(o: any): boolean,
  isArray(o: any): boolean,
  isNull(o: any): boolean,
  isUndefined(o: any): boolean,
  deepMerge(targetObj: any, sourceObj: any): any,
  checkParams(reducers: IF_REDUCERS, Context: IF_OBJ_ANY, options: IF_OPTIONS): IF_CHECK_RES,
}

// state
export interface IF_STATE extends OBJ_ANY {}

// reducers
export interface IF_REDUCERS {
  name: string;
  reducer: Function;
  initState: OBJ_ANY;
}

// options
export interface IF_OPTIONS {
  cover?: boolean;
}

// options
export interface IF_CHECK_RES {
  code: number;
  msg: string;
}

export interface IF_ACTION {
  type: string;
  payload: OBJ_ANY;
}