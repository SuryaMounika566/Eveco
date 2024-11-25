import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Intial from './LoginAndRegistration/Intial'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intial/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
