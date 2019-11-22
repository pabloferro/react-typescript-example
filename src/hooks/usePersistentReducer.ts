import { useReducer } from 'react';

function usePersistentReducer<S, A, I>(reducer: (state: S, action: A) => S, defaultState: I) {
  function persistentReducer(state: S, action: A) {
    const newState = reducer(state, action);

    localStorage.setItem('state', JSON.stringify(newState))
    return newState;
  }

  return useReducer(persistentReducer, JSON.parse(localStorage.getItem('state') || '') || defaultState);
}

export default usePersistentReducer;
