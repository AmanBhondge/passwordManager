import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/ProtectedRoute/Protectedroute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<ProtectedRoute Component={Home} />}></Route>
      <Route path="/home" element={<ProtectedRoute Component={Home} />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default App;