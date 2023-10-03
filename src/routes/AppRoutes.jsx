import { Routes, Route } from 'react-router-dom'
import App from '../components/App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />} />
    </Routes>
  )
}

export default AppRoutes
