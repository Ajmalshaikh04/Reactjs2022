import { configureStore, combineReducers } from "redux"

import todos from "./reducer/todoreducer"

const rootReducer = combineReducers({
    todos
})

const store = configureStore(
    rootReducer
)

export default store