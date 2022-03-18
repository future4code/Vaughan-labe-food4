import React from "react"
import { TextField } from "@mui/material";
import UseForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ContainerInput, Button } from "./styled";
import { adress } from "../../services/Requests";
import { goToSingUp } from "../../routes/coordinator";
import back from "../../assets/back.png"

const Adress = () =>{
    const navigate = useNavigate()
    const {form, onChange, clearFields} = UseForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
      })
      const submit = (event) =>{
        event.preventDefault()
        adress(form, clearFields, navigate)
        console.log(form)
        clearFields()
      }
    return (  
        <ContainerInput>
        <h3 className="address">
        <img onClick={()=> goToSingUp(navigate)} src={back} alt={"back"}/>
        </h3>
        <form onSubmit={submit}>

        <p>Meu endereço</p>
        <TextField
        name={"street"}
        placeholder="Rua/Av."
        value={form.street}
        label={"Logradouro"}
        type={"text"}
        required
        onChange={onChange}
        />
       <TextField
       name={"number"}
       placeholder="Apto./Bloco"
       value={form.number}
       label={"Número"}
       required
       onChange={onChange}
       />
       <TextField
       name={"complement"}
       placeholder="Complemento"
       value={form.complement}
       label={"Complemento"}
       variant="outlined"
       
       type={"text"}
       onChange={onChange}
       />
       <TextField
       name={"neighbourhood"}
       placeholder="Bairro"
       value={form.neighbourhood}
       label={"Bairro"}
       required
       onChange={onChange}
       />
       <TextField
       name={"city"}
       placeholder="Cidade"
       value={form.city}
       label={"Cidade"}
       variant="outlined"
       type="text"
       required
       onChange={onChange}
       />
       <TextField
       name={"state"}
       placeholder="Estado"
       value={form.state}
       label={"Estado"}
       variant="outlined"
       
       type={"text"}
       required
       onChange={onChange}
       />
       <Button variant="contained" color={"primary"} type="submit">Salvar</Button>
       </form>
       </ContainerInput> 
    )
    
}
export default Adress   