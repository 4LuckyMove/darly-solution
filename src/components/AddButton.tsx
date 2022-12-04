import React from 'react'
import Button from 'react-bootstrap/Button'
import { BsPersonPlusFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import MyModal from './MyModal'
import { openModal, closeModal } from '../store/slice/modalSlice'

const AddButton: React.FC = () => {
	const dispatch = useAppDispatch()
	const { isOpen } = useAppSelector(state => state.modal)

	return (
		<>
			<div>
				<Button
					variant='success'
					className='d-flex align-items-center gap-2 ms-auto'
					onClick={() => dispatch(openModal())}
				>
					<span>
						<BsPersonPlusFill size={'24px'} />
					</span>
					Add User
				</Button>
			</div>
			<MyModal show={isOpen} onHide={() => dispatch(closeModal())} />
		</>
	)
}

export default AddButton
