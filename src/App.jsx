import React from "react"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import GenrePage from "./pages/GenrePage/GenrePage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {

  return (
         <BrowserRouter>
           <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/genre" element={<GenrePage/>} />
           </Routes>
         </BrowserRouter>
  )
}

export default App
