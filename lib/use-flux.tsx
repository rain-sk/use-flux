import * as React from 'react';

import { Action, BaseState, Reducer } from './interfaces';

export const useFlux = <
    S extends BaseState<A>,
    A extends string
>(
    initialState: S,
    reducers: Map<A, Reducer<S>>
): [
        React.Context<{
            state: S,
            dispatch: React.Dispatch<{
                type: A;
                payload?: any;
            }>
        }>,
        React.StatelessComponent
    ] => {
    const context = React.createContext<{
        state: S,
        dispatch: React.Dispatch<{
            type: A;
            payload?: any;
        }>
    }>({ state: initialState, dispatch: (value: { type: A, payload?: any }) => { } });
    function reduce(state: S, action: A, payload?: any) {
        const reducer = reducers.get(action as A);
        if (reducer) {
            state = reducer(state, payload);
        }
        return state;
    }
    function reducer(state: S, action: { type: A, payload?: any }) {
        let next = { type: action.type, payload: action.payload } as Action<A>;
        while (next) {
            state = reduce(state, next.type, next.payload);
            if (state.dispatchQueue) {
                [next, ...state.dispatchQueue] = state.dispatchQueue;
            } else {
                next = undefined;
            }
        }
        return state;
    }
    const provider: React.FunctionComponent = (props) => {
        const [state, dispatch] = React.useReducer(reducer, initialState);
        const contextState = {
            state,
            dispatch
        };
        return (
            <context.Provider value={contextState}>
                {props.children}
            </context.Provider>
        );
    };
    return [context, provider];
}
