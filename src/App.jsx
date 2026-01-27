import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Layout from "./components/Layout"


function App() {

  const [theme, setTheme] = useState("light")


  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )

}

export default App
