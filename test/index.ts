import * as Fluent from '../lib';

// declare State
export interface IState extends Fluent.BaseState<IAction> {
  count: number;
  truthiness: boolean;
}

const initialState: IState = {
  count: 0,
  truthiness: false,
  dispatchStack: []
};

// declare Actions
export type IAction = 'INCREMENT' | 'DECREMENT' | 'TOGGLE_TRUTHINESS';

// and bind Reducers to actions in a Map
export const reducers = new Map<IAction, Fluent.Reducer<IState>>();
reducers.set('INCREMENT', (state: IState): IState => ({
    ...state,
    count: state.count + 1
  }));
reducers.set('DECREMENT', (state: IState): IState => ({
    ...state,
    count: state.count - 1
  }));
reducers.set('TOGGLE_TRUTHINESS', (state: IState): IState => ({
    ...state,
    truthiness: !state.truthiness
  }));

// finally, create your context!
export const [Context, Provider] = Fluent.Factory(initialState, reducers);
