import { Action } from './action';

export interface BaseState<A extends string> extends Object {
    dispatchStack: Action<A>[];
}