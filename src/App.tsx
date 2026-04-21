
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import LogoutForm from './components/LogoutForm'

function App() {


  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="logout" element={<LogoutForm />} />
        </Route>
      </Routes>
    
  )
}

export default App
