import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchUsers } from '../store/actions/userAction'
import Loader from './Loader'
import AddButton from './AddButton'

const MTable: React.FC = () => {
	const tHeads = [
		'id',
		'full name',
		'username',
		'email',
		'city',
		'phone',
		'company name',
		'website',
	]
	const dispatch = useAppDispatch()
	const { users, isLoadingUsers, errorUsers, allUsers } = useAppSelector(
		state => state.users
	)
	const [page, setPage] = useState<number>(1)
	const [limit, setLimit] = useState<string>('5')

	const allPages = Math.ceil(Number(allUsers) / Number(limit))

	const pageChangeHandler = ({ selected }: { selected: number }) => {
		const newOffset = selected + 1
		setPage(newOffset)
	}

	const handlerSelectedChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLimit(event.target.value)
		setPage(1)
	}
	// eslint-disable-next-line
	useEffect(() => {
		dispatch(fetchUsers({ page, limit }))
	}, [dispatch, page, limit])

	return (
		<>
			<div className='d-flex justify-content-between mb-2'>
				<div className='filter d-flex align-items-center gap-2 w-auto'>
					<h3 className='filter__title'>Filter:</h3>
					<Form.Select onChange={handlerSelectedChange}>
						<option value='5'>5</option>
						<option value='10'>10</option>
						<option value='15'>15</option>
					</Form.Select>
				</div>
				<AddButton />
			</div>
			<Row className='justify-content-lg-center align-items-md-center bg-light'>
				<Table striped bordered hover className='mb-0'>
					<thead>
						<tr>
							{tHeads.map((tHead, index) => (
								<th key={index}>{tHead}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{isLoadingUsers ? (
							<tr>
								<td colSpan={8} className='text-center'>
									<Loader />
								</td>
							</tr>
						) : errorUsers ? (
							<tr>
								<td colSpan={8} className='text-center'>
									{errorUsers}
								</td>
							</tr>
						) : (
							users.length !== 0 &&
							users.map(user => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.firstName + ' ' + user.lastName}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.city}</td>
									<td>{user.phone}</td>
									<td>{user.company}</td>
									<td>{user.website}</td>
								</tr>
							))
						)}
					</tbody>
					<thead>
						<tr>
							<td colSpan={8}>
								<ReactPaginate
									breakLabel='...'
									nextLabel='>'
									previousLabel='<'
									onPageChange={pageChangeHandler}
									pageRangeDisplayed={3}
									pageCount={allPages}
									forcePage={page - 1}
									containerClassName='d-flex justify-content-center align-items-center mb-0 pagination'
									pageClassName='page-item'
									pageLinkClassName='page-link'
									previousClassName='page-item'
									previousLinkClassName='page-link'
									nextClassName='page-item'
									nextLinkClassName='page-link'
									breakClassName='page-item'
									breakLinkClassName='page-link'
									activeClassName='active'
									disabledClassName='disabled'
									renderOnZeroPageCount={null || undefined}
								/>
							</td>
						</tr>
					</thead>
				</Table>
			</Row>
		</>
	)
}

export default MTable
