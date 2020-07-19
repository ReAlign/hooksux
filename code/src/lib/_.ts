import {
  IF_OBJ_ANY,
  IF_TOOLS, IF_REDUCERS,
  IF_OPTIONS,
  IF_CHECK_RES,
} from '../types/types';

const _: IF_TOOLS = {
  typeOf(o: any) {
    return ({}).toString.call(o).slice(8, -1).toLowerCase();
  },
  isObject(o: any) {
    return _.typeOf(o) === 'object';
  },
  isArray(o: any) {
    return _.typeOf(o) === 'array';
  },
  isNull(o: any) {
    return _.typeOf(o) === 'null';
  },
  isUndefined(o: any) {
    return _.typeOf(o) === 'undefined';
  },
  /**
   * 深度合并
   * @param targetObj
   * @param sourceObj
   */
  deepMerge(targetObj: any = {}, sourceObj: any = {}): any {
    // 非对象, 直接覆盖 [数组等]
    if (!_.isObject(targetObj)) {
      return sourceObj;
    } else {
      // 对象会被 null 和 undefined （使用空对象）覆盖
      // 而不是继续解析到下一层
      if (_.isNull(sourceObj) || _.isUndefined(sourceObj)) {
        return {};
      }

      Object.entries(sourceObj).forEach(([k, v]) => {
        targetObj[k] = _.isObject(targetObj[k]) ?
          _.deepMerge(targetObj[k], sourceObj[k]) :
          targetObj[k] = v;
      });
    }

    return targetObj;
  },
  /**
   * 检查参数
   * @param {*} reducers
   * @param {*} Context
   * @param {*} options
   */
  checkParams(
    reducers: IF_REDUCERS,
    Context: IF_OBJ_ANY,
    options: IF_OPTIONS
  ): IF_CHECK_RES {
    const {
      name = '',
    } = reducers || {};
    const {
      cover = false, // 覆盖
    } = options;
    const res: IF_CHECK_RES = {
      code: 0,
      msg: 'OK',
    };

    if (name === '') {
      // 名称不合法
      res.code = 1;
      res.msg = 'Error: name must be a effective string.';
    } else if (Context[name] && !cover) {
      // 已存在 & 不覆盖
      res.code = 2;
      res.msg = [
        `Error: ${name} Store already exists.`,
        `if want reset it, set 'options.cover=true'.`
      ].join('\n');
    }

    return res;
  }
};

export default _;