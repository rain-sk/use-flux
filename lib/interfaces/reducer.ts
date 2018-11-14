export interface Reducer<S> {
    (state: S, payload?: any): S;
}
