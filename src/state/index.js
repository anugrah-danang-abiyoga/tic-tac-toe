import { squareClicked } from './actions'
import { SQUARE_CLICKED } from './constants'
import { initialState, rootReducer } from './reducers'
import { getMoves } from './selectors'
import configureStore from './store'

export {
  configureStore,
  initialState,
  rootReducer,
  SQUARE_CLICKED,
  squareClicked,
  getMoves
}
