import React from "react"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {

  return (
         <BrowserRouter>
           <Routes>
            <Route path="/register" element={<RegisterPage/>} />
           </Routes>
         </BrowserRouter>
  )
}

export default App
