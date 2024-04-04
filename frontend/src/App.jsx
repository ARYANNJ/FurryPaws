import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import Home from './Components/Home'
import Cats from './Components/Cats'
import Dogs from './Components/Dogs'
import Others from './Components/Others'
import Login from './Components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/home"  element={<Home/>}/>
      <Route path="/cats"  element={<Cats/>}/>
      <Route path="/dogs"  element={<Dogs/>}/>
      <Route path="/others"  element={<Others/>}/>
      <Route path="/login"  element={<Login/>}/>
    </Routes>
    </BrowserRouter>
</>   
  )
}

export default App
