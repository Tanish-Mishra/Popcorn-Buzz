import React, { useState } from "react"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import GenrePage from "./pages/GenrePage/GenrePage"
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import {Routes,Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function App() {
 const navigate = useNavigate()

  return (
      
           <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/genre" element={<GenrePage/>}/>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage/>} />
           </Routes>
  )
}

export default App
