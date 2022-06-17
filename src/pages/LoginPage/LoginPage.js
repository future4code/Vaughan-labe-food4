import React, { useState } from "react"
import UseForm from "../../hooks/useForm"
import { goToFeed, goToSingUp } from "../../routes/coordinator"
import { login } from "../../services/Requests"
import { useNavigate } from "react-router-dom"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { TextField, InputAdornment, CircularProgress } from "@mui/material"
import { ContainerInput, ContairnerImg, ButtonSignUpStyle, ContainerField, ButtonStyle } from "./styled"
import logo from "../../assets/logo-future-eats-invert@2x.png"


const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { form, onChange, clearFields } = UseForm({ email: "", password: "", })
  const [isLoading, setIsLoading] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    login(form, clearFields, navigate, setIsLoading)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }



  return (
    <ContainerInput>
    
      <ContairnerImg>
        <img src={logo} alt={"Logo"} />
      </ContairnerImg>

      <form onSubmit={submit}>

        <p>Entrar</p>

        <ContainerField>
          <TextField
            name={"email"}
            placeholder="email@email.com"
            value={form.email}
            label={"E-mail"}
            type={"text"}
            required
            onChange={onChange}
            fullWidth
          />
          <TextField
            name={"password"}
            placeholder="Mínimo 6 caracteres"
            value={form.password}
            label={"Senha"}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            required
            onChange={onChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleShowPassword}>
                  {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                </InputAdornment>
              )
            }}
          />

          <ButtonStyle type="submit" > {isLoading ? <CircularProgress color="inherit" size={24}/> :  <>Entrar</>}</ButtonStyle>
        </ContainerField>
      </form>

      <ButtonSignUpStyle
        onClick={() => goToSingUp(navigate)}
      >Não possui cadastro? Clique aqui.
      </ButtonSignUpStyle>

    </ContainerInput>
  )
}

export default LoginPage