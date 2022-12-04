import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

interface LoaderProps {
	animation?: 'grow' | 'border'
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
}

const Loader: React.FC<LoaderProps> = ({
	animation = 'grow',
	variant = 'primary',
}) => {
	return (
		<Spinner animation={animation} variant={variant} role='status' as='span' />
	)
}

export default Loader