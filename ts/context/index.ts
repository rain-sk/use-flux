import { Fluent } from '../state';
import { createContext } from 'react';

export function FluentContext(state: Fluent.State): React.Context<Fluent.State> {
  return createContext(state);
}