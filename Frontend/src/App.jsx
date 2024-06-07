import './App.css'
import Login from './pages/login/Login';
import Singup from './pages/singup/Singup';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../Contex/AuthContex';




function App() {
  const{Authuser}=useAuthContext();
  return (
    <div className='container mx-auto flex justify-center items-center h-screen '>
      <Routes>
        <Route path='/' element={Authuser ? <Home/>:<Navigate to="/Login"/>} />
        <Route path='/login' element={Authuser ?<Navigate to="/"/> :<Login/>} />
        <Route path='/signup' element={Authuser ?<Navigate to="/"/> :<Singup/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
