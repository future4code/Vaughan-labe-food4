import React from "react";
import { Button, TextField } from "@mui/material";
import logo from "../../assets/logo-future-eats-invert@2x.png"
import UseForm from "../../hooks/useForm";
import { ContainerInput, ContairnerImg} from "./styled";
import { login } from "../../services/Requests";
import { useNavigate } from "react-router-dom";
import { goToSingUp } from "../../routes/coordinator";
const LoginPage = () => {
  const navigate = useNavigate()
  const {form, onChange, clearFields} = UseForm({
    email: "",
    password: "",
  })
  const submit = (event) =>{
    event.preventDefault()
    login(form, clearFields ,navigate)
    
  }
  return (
    <ContainerInput>
      
      <ContairnerImg>
      <img src={logo} alt={"Logo"}/>
      </ContairnerImg>
      <form onSubmit={submit}>
        
      <TextField
       name={"email"}
       placeholder="email"
       value={form.email}
       label={"email"}
       type={"text"}
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
      <Button variant="contained" color={"primary"} type="submit">Entrar</Button>
      </form>
      <Button 
      onClick={() => goToSingUp(navigate)}
      variant="text" margin={"normal"} color={"inherit"}>Não possui cadastro? Clique aqui.
      </Button>
    </ContainerInput>
  )
}

export default LoginPage