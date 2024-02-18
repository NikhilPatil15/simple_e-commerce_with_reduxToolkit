import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import{  CardDetails, Header, Home } from './components/index'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path='/cart' element={<CardDetails/>}/>
     </Routes>
     <Toaster/>
    </>
  )
}

export default App
