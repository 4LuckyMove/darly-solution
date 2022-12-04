import React from 'react'
import ReactDOM from 'react-dom/client'
// Style
import './styles/index.css'
// Components
import App from './App'
// Redux
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
