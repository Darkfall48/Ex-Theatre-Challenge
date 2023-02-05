//? Libraries
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import thunk from 'redux-thunk'
//? Reducers
import { theatreReducer } from './reducers/theatre.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  theatreModule: theatreReducer,
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

// window.gStore = store
