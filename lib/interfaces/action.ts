export interface Action<T extends string> {
    type: T,
    payload?: any
}