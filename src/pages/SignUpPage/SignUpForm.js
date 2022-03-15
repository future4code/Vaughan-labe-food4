import { Button, TextField } from "@mui/material";
import React from "react";
import UseForm from "../../hooks/useForm";
import { ContainerInput, ContairnerImg} from "./styled";
import logo from "../../assets/logo-future-eats-invert@2x.png"
import { signUp } from "../../services/Requests";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate()
  const {form, onChange, clearFields} = UseForm({
      name: "",
      email: "",
      cpf: "",
      password: "",
      confirmation: ""
  })
  const submit = (event) =>{
    event.preventDefault()
    signUp(form, clearFields, navigate)
  }
  // const body = {
  //   name: form.name,
  //   email: form.email,
  //   cpf: form.cpf,
  //   password: form.password
  // }
  
  return (
    <ContainerInput>
      <ContairnerImg>
      <img src={logo} alt={"Logo"}/>
      </ContairnerImg>
      <form onSubmit={submit}>
      <TextField
       name={"name"}
       placeholder="Nome"
       value={form.name}
       label={"Nome"}
       type={"text"}
       required
       onChange={onChange}
       />
      <TextField
      name={"email"}
      placeholder="Email"
      value={form.email}
      label={"Email"}
      type={"email"}
      required
      onChange={onChange}
      />
      <TextField
      name={"cpf"}
      placeholder="Cpf"
      value={form.cpf}
      label={"Cpf"}
      required
      onChange={onChange}
      />
      <TextField
      name={"password"}
      placeholder="Senha"
      value={form.password}
      label={"Senha"}
      variant="outlined"
      type="password"
      required
      onChange={onChange}
      />
      <TextField
      name={"confirmation"}
      placeholder="Confirmarmação"
      value={form.confirmation}
      label={"Confirmarmação"}
      variant="outlined"
      margin="normal"
      type={"password"}
      required
      onChange={onChange}
      />
     
      <Button variant="contained" color={"primary"} type="submit">Cadastrar</Button>
      </form>
    </ContainerInput>
  )
}

export default SignUpForm