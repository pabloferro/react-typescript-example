import { useReducer } from 'react';

function usePersistentReducer(reducer, defaultState) {
  function persistentReducer(state, action) {
    const newState = reducer(state, action);

    localStorage.setItem('state', JSON.stringify(newState))
    return newState;
  }

  return useReducer(persistentReducer, JSON.parse(localStorage.getItem('state')) || defaultState);
}

export default usePersistentReducer;
