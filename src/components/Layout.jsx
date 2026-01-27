import LandingPage from "./LandingPage"
import OnboardingScreen from "./OnboardingScreen"

function Layout(theme, setTheme) {


    return (

        <div>
            <LandingPage theme={theme} setTheme={setTheme} />
            <OnboardingScreen theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default Layout