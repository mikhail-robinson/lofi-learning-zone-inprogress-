import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
}
