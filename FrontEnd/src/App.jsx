import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      </Routes>
      </Router>
    </div>
  )
}
