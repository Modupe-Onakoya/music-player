import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Layout from "./components/Layout"
import Practise from "./components/Practise"
import MusicHomePage from "./components/MusicHomePage"


function App() {

  const [theme, setTheme] = useState("light")


  return (
    <BrowserRouter>


      <Routes>

        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MusicHomePage />} />


      </Routes>
    </BrowserRouter>
    // <div>
    //   <Practise />
    // </div>
  )

}

export default App
