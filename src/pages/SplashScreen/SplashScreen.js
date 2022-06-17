import React from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../routes/coordinator";
import { ContainerSplash } from "./styled";
import Splash from "../../assets/logo-future-eats.png"


const SplashScreen = () => {
    const navigate = useNavigate()

    document.addEventListener('DOMContentLoaded', (e) => {
        setTimeout(() => {
            document.querySelector(`.splash`).style.display = `none`;
            goToLogin(navigate)
        }, 2500);
    })

    return (
        <ContainerSplash>
            <div className="splashScreen">
                <div className="splash">
                    <img src={Splash} className="fade-in" alt="animação tela inicial" />
                </div>

            </div>
        </ContainerSplash>
    )
}

export default SplashScreen;