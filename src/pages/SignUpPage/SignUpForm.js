import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../routes/coordinator"
import UseForm from "../../hooks/useForm"
import { signUp } from "../../services/Requests"
import { TextField, InputAdornment, CircularProgress } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import logo from "../../assets/logo-future-eats-invert@2x.png"
import { ContainerInput, ContairnerImg, ContainerField, Button, LogoImg, BackImg, ErrorPassword } from "./styled"

const SignUpForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { form, onChange, clearFields } = UseForm({ name: "", email: "", cpf: "", password: "", confirmation: "" })
  const [isLoading, setIsLoading] = useState(false)
  const body = {
    name: form.name,
    email: form.email,
    cpf: form.cpf,
    password: form.password,
    confirmation: form.confirmation
  }

  const submit = (event) => {
    event.preventDefault()
    if (form.password === form.confirmation) {
      signUp(body, clearFields, navigate, setIsLoading)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <ContainerInput>

      <ContairnerImg>
        <LogoImg src={logo} alt={"Logo"} />
      </ContairnerImg>

      <p>Cadastrar</p>

      <form onSubmit={submit}>
        <ContainerField>
          <TextField
            type={"text"}
            name={"name"}
            label={"Nome"}
            placeholder="Nome e sobrenome"
            value={form.name}
            onChange={onChange}
            required
            fullWidth
          />
          <TextField
            type={"email"}
            name={"email"}
            label={"E-mail"}
            placeholder="email@email.com"
            value={form.email}
            onChange={onChange}
            required
            fullWidth
          />
          <TextField
            type={"number"}
            name={"cpf"}
            label={"CPF"}
            placeholder="000.000.000-00"
            inputProps={{pattern: '^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}', title: "O CPF precisa conter no mínimo 11 dígitos!"}}
            value={form.cpf}
            onChange={onChange}
            required
            fullWidth
          />
          <TextField
            name={"password"}
            label={"Senha"}
            placeholder="Mínimo 6 caracteres"
            inputProps={{ pattern: '^.{6,}', title: "A senha deve conter no mínimo 6 caracteres!" }}
            value={form.password}
            onChange={onChange}
            variant="outlined"
            required
            fullWidth
            InputLabelProps={{shrink: true,}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleShowPassword}>
                  {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                </InputAdornment>
              )
            }}
          />

          <TextField
            error={
              form.password !== form.confirmation && true
            }
            id="outlined-error-helper-text"
            name={"confirmation"}
            placeholder="Confirmar a senha anterior"
            value={form.confirmation}
            label={"Confirmar"}
            type={showPassword ? "text" : "password"}
            inputProps={{ pattern: '^.{6,}', title: "A senha deve conter no mínimo 6 caracteres!" }}
            InputLabelProps={{shrink: true,}}
            variant="outlined"
            required
            fullWidth
            onChange={onChange}
            helperText={form.confirmation !== ""
              && form.password !== form.confirmation
              && <ErrorPassword >Deve ser a mesma que a anterior.</ErrorPassword>}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleShowPassword}>
                  {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                </InputAdornment>
              )
            }}
          />
          <Button variant="contained" color={"primary"} type="submit" fullWidth> {isLoading ? <CircularProgress color="inherit" size={24}/> : <>Criar</>}</Button>
        </ContainerField>
      </form>
    </ContainerInput>
  )
}

export default SignUpForm