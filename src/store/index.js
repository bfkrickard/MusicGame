import { createStore, combineReducers } from 'redux'
import * as reducers from 'AppReducers'

// initialize global store
// allow devtool on browser
export const store = createStore(
  combineReducers(reducers), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// used to dispatch an action to a reducer
export const dispatch = (action) => store.dispatch(action)