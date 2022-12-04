import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import { useAppDispatch } from '../hooks/redux'
import { addUsersAsync } from '../store/actions/userAction'
import { IUsers } from '../interface/interfaces'


interface ModalProps {
	show: boolean
	onHide: () => void
}
// eslint-disable-next-line
const phoneRegExp = /1?-?\(?[0-9]{3}[\-\)][0-9]{3}-[0-9]{4}/g
// eslint-disable-next-line
const websiteRegExp = 
	// eslint-disable-next-line
	/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

const schema = yup.object().shape({
	firstName: yup
		.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('First name Required'),
	lastName: yup
		.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Last name Required'),
	username: yup
		.string()
		.min(3, 'Too Short!')
		.max(15, 'Too Long!')
		.required('Username Required'),
	email: yup
		.string()
		.min(3, 'must be at least 3 characters long')
		.email('Invalid email')
		.required('E-mail Required'),
	city: yup
		.string()
		.min(3, 'Too Short!')
		.max(30, 'Too Long!')
		.required('City Required'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Phone Required'),
	website: yup
		.string()
		.matches(websiteRegExp, 'Website is not valid')
		.required('Website Required'),
	company: yup
		.string()
		.min(3, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Company Required'),
})

const MyModal: React.FC<ModalProps> = props => {
	const dispatch = useAppDispatch()

	function postUsers(data: IUsers, closed: () => void) {
		dispatch(addUsersAsync(data))
		closed()
		formik.resetForm()
	}

	const formik = useFormik({
		initialValues: {
			id: Date.now(),
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			city: '',
			phone: '',
			website: '',
			company: '',
		},
		validationSchema: schema,
		onSubmit: values => {
			postUsers(values, props.onHide)
			formik.handleReset(values)
		},
	})

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			animation={false}
		>
			<Form onSubmit={formik.handleSubmit} className='form-modal-content'>
				<Modal.Header closeButton>
					<Modal.Title>Add User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='validationFormikFirstName'>
							<Form.Label>First name</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type='text'
									placeholder='First name'
									name='firstName'
									value={formik.values.firstName}
									onChange={formik.handleChange}
									isInvalid={!!formik.errors.firstName}
								/>
								<Form.Control.Feedback type='invalid'>
									{formik.errors.firstName}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
						<Form.Group as={Col} md='6' controlId='validationFormikLastName'>
							<Form.Label>Last name</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type='text'
									placeholder='Last name'
									name='lastName'
									value={formik.values.lastName}
									onChange={formik.handleChange}
									isInvalid={!!formik.errors.lastName}
								/>
								<Form.Control.Feedback type='invalid'>
									{formik.errors.lastName}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group controlId='validationFormikUsername'>
							<Form.Label>Username</Form.Label>
							<InputGroup hasValidation>
								<InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
								<Form.Control
									type='text'
									placeholder='Username'
									aria-describedby='inputGroupPrepend'
									name='username'
									value={formik.values.username}
									onChange={formik.handleChange}
									isInvalid={!!formik.errors.username}
								/>
								<Form.Control.Feedback type='invalid'>
									{formik.errors.username}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group controlId='validationFormikEmail'>
							<Form.Label>E-mail</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type='email'
									placeholder='example@example.com'
									aria-describedby='inputGroupPrepend'
									name='email'
									value={formik.values.email}
									onChange={formik.handleChange}
									isInvalid={!!formik.errors.email}
								/>
								<Form.Control.Feedback type='invalid'>
									{formik.errors.email}
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='validationFormikPhone'>
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type='text'
								placeholder='1-234-567-8901'
								name='phone'
								value={formik.values.phone}
								onChange={formik.handleChange}
								isInvalid={!!formik.errors.phone}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.phone}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='6' controlId='validationFormikCity'>
							<Form.Label>City</Form.Label>
							<Form.Control
								type='text'
								placeholder='City'
								name='city'
								value={formik.values.city}
								onChange={formik.handleChange}
								isInvalid={!!formik.errors.city}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.city}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className='mb-3'>
						<Form.Group as={Col} md='6' controlId='validationFormikCompany'>
							<Form.Label>Company</Form.Label>
							<Form.Control
								type='text'
								placeholder='Company name'
								name='company'
								value={formik.values.company}
								onChange={formik.handleChange}
								isInvalid={!!formik.errors.company}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.company}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='6' controlId='validationFormikWebsite'>
							<Form.Label>Website</Form.Label>
							<Form.Control
								type='text'
								placeholder='Website'
								name='website'
								value={formik.values.website}
								onChange={formik.handleChange}
								isInvalid={!!formik.errors.website}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.website}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button
						type='submit'
						className='btn btn-success'
						disabled={!(formik.isValid && formik.dirty)}
					>
						Submit
					</Button>
					<Button onClick={props.onHide} className='btn btn-secondary'>
						Close
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default MyModal
