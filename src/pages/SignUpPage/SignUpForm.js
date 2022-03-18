import { TextField, InputAdornment } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, {useState} from "react"
import UseForm from "../../hooks/useForm"
import { ContainerInput, ContairnerImg, ContainerField, Button } from "./styled"
import logo from "../../assets/logo-future-eats-invert@2x.png"
import { signUp } from "../../services/Requests"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { form, onChange, clearFields } = UseForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmation: ""
  })

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
      signUp(body, clearFields, navigate)
    }
    else {
      alert("Senhas Diferentes")
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <ContainerInput>
      <ContairnerImg>
        <img src={logo} alt={"Logo"} />
      </ContairnerImg>

      <p>Cadastrar</p>

      
      <form onSubmit={submit}>
      <ContainerField>
        <TextField
          name={"name"}
          placeholder="Nome e sobrenome"
          value={form.name}
          label={"Nome"}
          type={"text"}
          required
          onChange={onChange}
          fullWidth
        />
        <TextField
          name={"email"}
          placeholder="email@email.com"
          value={form.email}
          label={"E-mail"}
          type={"email"}
          required
          onChange={onChange}
          fullWidth
        />
        <TextField
          name={"cpf"}
          placeholder="000.000.000-00"
          value={form.cpf}
          label={"CPF"}
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
          fullWidth
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleShowPassword}>
                {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
              </InputAdornment>
            )
          }}
        />
        <TextField
          name={"confirmation"}
          placeholder="Confirmar a senha anterior"
          value={form.confirmation}
          label={"Confirmar"}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          required
          fullWidth
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleShowPassword}>
                {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
              </InputAdornment>
            )
          }}
        />
        <Button variant="contained" color={"primary"} type="submit" fullWidth>Criar</Button>
        </ContainerField>
      </form>
    </ContainerInput>
  )
}

export default SignUpForm