import React from "react"
import { Button, TextField } from "@mui/material";
import UseForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ContainerInput } from "./styled";
import { adress } from "../../services/Requests";
import { goToProfile } from "../../routes/coordinator";
import back from "../../assets/back.png"
const Adress = () =>{
    const navigate = useNavigate()
    const {form, onChange, clearFields} = UseForm(
      {
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
      }
      )
      const submit = (event) =>{
        event.preventDefault()
        adress(form, clearFields, navigate)
        clearFields()
      }
    return (  
        <ContainerInput>
        <h3 className="address">
        <img onClick={()=> goToProfile(navigate)} src={back} alt={"back"}/>
          Endereço</h3>
        <form onSubmit={submit}>
         <TextField
        name={"street"}
        placeholder="Rua"
        value={form.street}
        label={"Rua"}
        type={"text"}
        required
        onChange={onChange}
        />
       <TextField
       name={"number"}
       placeholder="Número"
       value={form.number}
       label={"Número"}
       required
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
       <TextField
       name={"complement"}
       placeholder="Complemento"
       value={form.complement}
       label={"Complemento"}
       variant="outlined"
       
       type={"text"}
       onChange={onChange}
       />
       <Button variant="contained" color={"primary"} type="submit">Salvar</Button>
       </form>
       </ContainerInput> 
    )
    
}
export default Adress   