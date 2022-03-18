import React from "react"
import Back from '../../assets/back.png'
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../routes/coordinator"
import SignUpForm from "./SignUpForm"
import { PageTittleContainer, TittleNavContainer,BackImg } from "./styled"

const SignUpPage = () => {
  const navigate = useNavigate()

  return (
    <div>

      <PageTittleContainer>
        <TittleNavContainer>
          <BackImg src={Back} onClick={() => goToLogin(navigate)} />
        </TittleNavContainer>
      </PageTittleContainer>

      <SignUpForm />
    </div>
  )
}

export default SignUpPage