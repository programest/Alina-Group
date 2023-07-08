import { createStore, combineReducers, compose } from 'redux'
import { reducerLogicInput } from '../reducer/reducerLogic'
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer = combineReducers({
	logic: reducerLogicInput,
})
export const store = createStore(rootReducer, composeWithDevTools())