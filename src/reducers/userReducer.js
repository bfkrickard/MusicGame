import {User} from 'AppModels'
import {actionTypes} from 'AppConstants/actionTypes'

/**
 * { displayName, points }
 */
const initialState = new User()

/**
 * current user state
 * @param {object} state 
 * @param {object} action 
 */
export const userReducer = (state=initialState, action) => {

  switch (action.type) {
    case actionTypes.LOGIN:
      state.displayName = action.data?.displayName
      return state 
  
    default:
      return state
  }
}