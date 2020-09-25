import {dispatch} from 'AppStore'
import {actionTypes} from 'AppConstants/actionTypes'

/**
 * Login
 * @todo - needs to do api logic to login to spotify
 */
export const login = (displayName) => {
  dispatch({
    type: actionTypes.LOGIN,
    data: {
      displayName
    }
  })
}