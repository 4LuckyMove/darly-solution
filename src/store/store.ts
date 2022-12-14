import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usersReducer from './slice/userSlice'
import modalReducer from './slice/modalSlice'

const rootReducer = combineReducers({
	users: usersReducer,
	modal: modalReducer,
})

export function setupStore() {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']