export function createStore(initialState, middlewares = []){
    let state = initialState;

    const listeners = [];

    const store = {
        getState: () => state,
        dispatch: (actionFn) => {
            state = actionFn(state);
            listeners.forEach(fn => fn(state));
            middlewares.forEach(mw => mw(state));
        },
        subscribe: (listener) => {
            listeners.push(listener);
            return () => listeners.filter(fn => fn !== listener);
          }
    };
    return store;
}