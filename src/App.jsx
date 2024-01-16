import React, { useState } from "react"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import GenrePage from "./pages/GenrePage/GenrePage"
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {

  return (
         <BrowserRouter>
           <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/genre" element={<GenrePage/>}/>
            <Route path="/home" element={<HomePage/>} />
           </Routes>
         </BrowserRouter>
  )
}

export default App
