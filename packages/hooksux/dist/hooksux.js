function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var _ = {
  typeOf: function typeOf(o) {
    return {}.toString.call(o).slice(8, -1).toLowerCase();
  },

  isObject: function isObject(o) {
    return _.typeOf(o) === 'object';
  },

  isArray: function isArray(o) {
    return _.typeOf(o) === 'array';
  },

  isNull: function isNull(o) {
    return _.typeOf(o) === 'null';
  },

  isUndefined: function isUndefined(o) {
    return _.typeOf(o) === 'undefined';
  },

  deepMerge: function deepMerge(targetObj, sourceObj) {
    if ( targetObj === void 0 ) targetObj = {};
    if ( sourceObj === void 0 ) sourceObj = {};

    if (!_.isObject(targetObj)) {
      return sourceObj;
    } else {
      if (_.isNull(sourceObj) || _.isUndefined(sourceObj)) {
        return {};
      }

      Object.entries(sourceObj).forEach(function (ref) {
        var k = ref[0];
        var v = ref[1];

        targetObj[k] = _.isObject(targetObj[k]) ? _.deepMerge(targetObj[k], sourceObj[k]) : targetObj[k] = v;
      });
    }

    return targetObj;
  },

  checkParams: function checkParams(reducers, Context, options) {
    var ref = reducers || {};
    var name = ref.name; if ( name === void 0 ) name = '';
    var cover = options.cover; if ( cover === void 0 ) cover = false;
    var res = {
      code: 0,
      msg: 'OK'
    };

    if (name === '') {
      res.code = 1;
      res.msg = 'Error: name must be a effective string.';
    } else if (Context[name] && !cover) {
      res.code = 2;
      res.msg = [("Error: " + name + " Store already exists."), "if want reset it, set 'options.cover=true'."].join('\n');
    }

    return res;
  }

};

var reducerList = [];
var Context = {};
var _initStore = function (c, reducers, oriState, options) {
  if ( oriState === void 0 ) oriState = {};
  if ( options === void 0 ) options = {};

  var builder = c.builder;
  var createProvider = c.createProvider;
  var oriReducer = c.oriReducer;
  var ref = reducers || {};
  var name = ref.name; if ( name === void 0 ) name = '';
  var reducer = ref.reducer; if ( reducer === void 0 ) reducer = oriReducer;
  var initState = ref.initState; if ( initState === void 0 ) initState = {};

  var ref$1 = _.checkParams(reducers, Context, options);
  var code = ref$1.code; if ( code === void 0 ) code = 0;
  var msg = ref$1.msg; if ( msg === void 0 ) msg = '';

  if (code === 0) {
    var _initState = _.deepMerge(initState, oriState[name] || {});

    var _reducers = builder(name, reducer, _initState);

    Context[_reducers.name] = _reducers.Context;
    reducerList.push(_reducers);
  } else {
    console.error(msg);
  }

  var providers = reducerList.map(function (r) { return r.Provider; });
  var Provider = createProvider(providers);
  return Provider;
};
var _getContext = function () { return Context; };

var oriReducer = (function (state, action) {
  var type = action.type; if ( type === void 0 ) type = '';
  var payload = action.payload; if ( payload === void 0 ) payload = {};

  switch (type) {
    case 'update':
      var updateList = _.isArray(payload) ? payload : [payload];
      updateList.forEach(function (item) {
        _.deepMerge(state, item);
      });
      return Object.assign({}, state);

    default:
      return state;
  }
});

function builder (r, name, reducer, initState) {
  var React$$1 = r.React; if ( React$$1 === void 0 ) React$$1 = null;
  var createContext = r.createContext;
  var useReducer = r.useReducer;
  var Context = createContext({});

  var Provider = function (props) {
    var ref = useReducer(reducer, initState);
    var state = ref[0];
    var dispatch = ref[1];
    return React$$1.createElement( Context.Provider, { value: {
      state: state,
      dispatch: dispatch
    } },
        props.children
      );
  };

  return {
    Context: Context,
    Provider: Provider,
    name: name
  };
}

function builder$1 (name, reducer, initState) {
  var r = {
    React: React__default,
    createElement: React.createElement,
    createContext: React.createContext,
    useReducer: React.useReducer
  };
  return builder(r, name, reducer, initState);
}

var ProvidersComposer = function (props) {
  var r = props.r; if ( r === void 0 ) r = {};
  var React$$1 = r.React;
  return props.providers.reduceRight(function (children, Parent) { return React$$1.createElement( Parent, null, children ); }, props.children);
};

var createProvider = function (r, providers) { return function (props) {
  var React$$1 = r.React;
  return React$$1.createElement( ProvidersComposer, { r: r, providers: providers },
      props.children
    );
}; };

function createProvider$1 (providers) {
  var r = {
    React: React__default,
    createElement: React.createElement
  };
  return createProvider(r, providers);
}

var initStore = function (reducers, oriState, options) {
  if ( oriState === void 0 ) oriState = {};
  if ( options === void 0 ) options = {};

  var r = {
    builder: builder$1,
    createProvider: createProvider$1,
    oriReducer: oriReducer
  };
  return _initStore(r, reducers, oriState, options);
};
var getContext = function () { return _getContext(); };
var deepMerge = function (targetObj, sourceObj) { return _.deepMerge(targetObj, sourceObj); };

exports.initStore = initStore;
exports.getContext = getContext;
exports.deepMerge = deepMerge;
