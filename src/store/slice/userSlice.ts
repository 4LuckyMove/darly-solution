import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUsers } from '../../interface/interfaces'

interface UserState {
	isLoadingUsers: boolean
	errorUsers: string
	users: IUsers[]
	allUsers: string | undefined
}

const initialState: UserState = {
	isLoadingUsers: false,
	errorUsers: '',
	users: [],
	allUsers: '0',
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetching(state) {
			state.isLoadingUsers = true
		},
		fetchSuccess(state, action: PayloadAction<IUsers[]>) {
			state.isLoadingUsers = false
			state.users = action.payload
			state.errorUsers = ''
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.isLoadingUsers = false
			state.errorUsers = action.payload.message
		},
		addUsers(state, action: PayloadAction<IUsers>) {
			state.isLoadingUsers = false
			state.users.push(action.payload)
			state.errorUsers = ''
		},
		allUsersCount(state, action: PayloadAction<string>) {
			state.allUsers = action.payload
		},
	},
})

export default userSlice.reducer