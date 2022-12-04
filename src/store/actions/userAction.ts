import { AxiosError } from 'axios'
import { userSlice } from '../slice/userSlice'
import { AppDispatch } from '../store'
import api from '../../API/api'
import { IUsers } from '../../interface/interfaces'

export const fetchUsers = ({page = 1, limit = '5'}) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(userSlice.actions.fetching())
			const response = await api.get<Array<IUsers>>('users', {
				params: {
					_limit: limit,
					_page: page,
				},
			})
			dispatch(userSlice.actions.fetchSuccess(response.data))
			dispatch(
				userSlice.actions.allUsersCount(response.headers['x-total-count'] || '0')
			)
		} catch (error) {
			dispatch(userSlice.actions.fetchError(error as AxiosError<Error>))
		}
	}
}

export const addUsersAsync = (data: IUsers) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(userSlice.actions.fetching())
			const response = await api.post('users', data)
			dispatch(userSlice.actions.addUsers(response.data))
		} catch (error) {
			dispatch(userSlice.actions.fetchError(error as AxiosError<Error>))
		}
	}
}
