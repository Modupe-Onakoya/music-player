import { useState } from "react"
import OnboardingScreen from "./components/OnboardingScreen"
import LandingPage from "./components/LandingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./components/SignUp"


function App() {

  const [theme, setTheme] = useState("light")


  return (
    <BrowserRouter>
      <Routes>

        <OnboardingScreen theme={theme} setTheme={setTheme} />
        <LandingPage />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  )

}

export default App
