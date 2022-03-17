import React from "react"
import UseForm from "../../../hooks/useForm"
import { Button, TextField } from "@mui/material";
import { ContainerInput } from "../../Adress/styled";
import back from "../../../assets/back.png"
import { goToProfile } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { UpDateAdress } from "../../../services/Requests";
const EditAddress = () =>{
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
        UpDateAdress(form, clearFields, navigate)
        console.log(form)
        clearFields()
      }
    return(
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

export default EditAddress