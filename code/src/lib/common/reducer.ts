import { IF_OBJ_ANY, IF_STATE, IF_ACTION, } from '../../types/types';

import _ from '../_';

export default (state: IF_STATE, action: IF_ACTION) => {
  const {
    type = '',
    payload = {},
  } = action;

  switch (type) {
    case 'update':
      const updateList = _.isArray(payload) ? payload : [payload];

      // 更新
      updateList.forEach((item: IF_OBJ_ANY) => {
        _.deepMerge(state, item);
      });

      // 返回新对象
      return {
        ...state,
      };
    default:
      return state;
  }
};