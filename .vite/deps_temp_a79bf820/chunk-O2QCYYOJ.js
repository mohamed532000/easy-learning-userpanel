import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/react-redux/es/hooks/useSelector.js
var import_react2 = __toESM(require_react());

// node_modules/react-redux/es/hooks/useReduxContext.js
var import_react = __toESM(require_react());

// node_modules/react-redux/es/components/Context.js
var React = __toESM(require_react());
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  var _gT$ContextKey;
  if (!React.createContext)
    return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
  let realContext = contextMap.get(React.createContext);
  if (!realContext) {
    realContext = React.createContext(null);
    if (true) {
      realContext.displayName = "ReactRedux";
    }
    contextMap.set(React.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = getContext();

// node_modules/react-redux/es/hooks/useReduxContext.js
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = (0, import_react.useContext)(context);
    if (!contextValue) {
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    }
    return contextValue;
  };
}
var useReduxContext = createReduxContextHook();

// node_modules/react-redux/es/utils/useSyncExternalStore.js
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};

// node_modules/react-redux/es/hooks/useSelector.js
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector2(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = void 0,
      noopCheck = void 0
    } = typeof equalityFnOrOptions === "function" ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;
    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext2();
    const firstRun = (0, import_react2.useRef)(true);
    const wrappedSelector = (0, import_react2.useCallback)({
      [selector.name](state) {
        const selected = selector(state);
        if (true) {
          const finalStabilityCheck = typeof stabilityCheck === "undefined" ? globalStabilityCheck : stabilityCheck;
          if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
            const toCompare = selector(state);
            if (!equalityFn(selected, toCompare)) {
              console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
                state,
                selected,
                selected2: toCompare
              });
            }
          }
          const finalNoopCheck = typeof noopCheck === "undefined" ? globalNoopCheck : noopCheck;
          if (finalNoopCheck === "always" || finalNoopCheck === "once" && firstRun.current) {
            if (selected === state) {
              console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.");
            }
          }
          if (firstRun.current)
            firstRun.current = false;
        }
        return selected;
      }
    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    (0, import_react2.useDebugValue)(selectedState);
    return selectedState;
  };
}
var useSelector = createSelectorHook();

export {
  ReactReduxContext,
  createReduxContextHook,
  useReduxContext,
  notInitialized,
  initializeUseSelector,
  createSelectorHook,
  useSelector
};
//# sourceMappingURL=chunk-O2QCYYOJ.js.map
