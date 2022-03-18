import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material"
import logo from "../../assets/logo-future-eats-invert@2x.png"
import UseForm from "../../hooks/useForm"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { ContainerInput, ContairnerImg, ButtonSignUpStyle, ContainerField, Button} from "./styled"
import { login } from "../../services/Requests"
import { useNavigate } from "react-router-dom"
import { goToSingUp } from "../../routes/coordinator"

const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { form, onChange, clearFields } = UseForm({
    email: "",
    password: "",
  })
  const submit = (event) => {
    event.preventDefault()
    login(form, clearFields, navigate)

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
            placeholder="email"
            value={form.email}
            label={"E-mail"}
            type={"text"}
            required
            onChange={onChange}
            fullWidth
          />
          <TextField
            name={"password"}
            placeholder="Senha"
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

          <Button variant="contained" color={"primary"} type="submit" >Entrar</Button>
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