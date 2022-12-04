import React from 'react'
// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import MTable from './components/MTable'

const App: React.FC = () => {
	return (
		<Container className='content-table'>
			<MTable />
		</Container>
	)
}

export default App
