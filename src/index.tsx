import { Context, createContext, useContext, createElement, Dispatch, FunctionComponent, StatelessComponent, useReducer } from 'react';

export interface Action<T extends string> {
  type: T,
  payload?: any
}

export interface Reducer<S> {
  (state: S, payload?: any): S;
}

export class ActionMap<T extends string, S> {
  constructor(private _map: Map<T, Reducer<S>> = new Map<T, Reducer<S>>()) { }
  public set(action: T, reducer: Reducer<S>) {
    this._map.set(action, reducer);
  }
  public reduce(state: S, action: Action<T>): S {
    const reducer = this._map.get(action.type);
    return !reducer ? state : reducer(state, action.payload);
  }
}
export const createFlux = <
  T extends string,
  S
>(initialState: S): [
    ActionMap<T, S>,
    Context<{
      state: S,
      dispatch: Dispatch<Action<T>>
    }>,
    StatelessComponent
  ] => {
  const reducers = new ActionMap<T, S>();
  const context = createContext<{
    state: S,
    dispatch: Dispatch<Action<T>>
  }>({ state: initialState, dispatch: () => { } });
  const reducer = (state: S, action: Action<T>) => {
    return reducers.reduce(state, action);
  };
  const provider: FunctionComponent = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextState = {
      state,
      dispatch
    };
    return (
      createElement(context.Provider, { value: contextState } as any, props.children)
    );
  };
  return [reducers, context, provider];
};

interface IUseFlux {
  <S, T extends string>(context: Context<{
    state: S;
    dispatch: Dispatch<Action<T>>;
  }>): {
    state: S;
    dispatch: Dispatch<Action<T>>;
  };
  <S, T extends string, O>(context: Context<{
    state: S;
    dispatch: Dispatch<Action<T>>;
  }>, map: (context: {
    state: S;
    dispatch: Dispatch<Action<T>>;
  }) => O): O;
}

export const useFlux: IUseFlux = <S, T extends string, O>(context: Context<{
  state: S;
  dispatch: Dispatch<Action<T>>;
}>, map?: (context: {
  state: S;
  dispatch: Dispatch<Action<T>>;
}) => O) => {
  const ctx = useContext(context);
  return map ? map(ctx) : ctx;
}
