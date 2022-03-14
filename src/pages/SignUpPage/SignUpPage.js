import { Button, TextField } from "@mui/material";
import React from "react";
import UseForm from "../../hooks/useForm";
import { ContainerInput } from "./styled";


const SignUpPage = () => {
  const {form, onChange, clearFields} = UseForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmation: ""
  })
  const submit = (event) =>{
    event.preventDefault()
    clearFields()
    console.log(form)
  }
  return (
    <ContainerInput>
      <h1>SignUpPage</h1>
      {/* <img src="" alt={"Logo"}/> */}
      <form onSubmit={submit}>
      <TextField
      name={"name"}
       placeholder="Nome"
       value={form.name}
       label={"Nome"}
       onChange={onChange}
       />
      <TextField
      name={"email"}
      placeholder="Email"
      value={form.email}
      label={"Email"}
      onChange={onChange}
      />
      <TextField
      name={"cpf"}
      placeholder="Cpf"
      value={form.cpf}
      label={"Cpf"}
      onChange={onChange}
      />
      <TextField
      name={"password"}
      placeholder="Senha"
      value={form.password}
      label={"Senha"}
      variant="outlined"
      type="password"
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
      onChange={onChange}
      />
     
      <Button variant="outlined" color={"primary"} type="submit">Cadastrar</Button>
      </form>
    </ContainerInput>
  )
}

export default SignUpPage