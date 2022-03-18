import { Button, TextField } from "@mui/material"
import React from "react"
import { ContainerInput, ContainerUpDateProfile } from "./styled";

import { goToProfile } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import back from "../../../assets/back.png"
import UseForm from "../../../hooks/useForm";
import { editProfile } from "../../../services/Requests";
export const EditProfile = () => {
    const {form, onChange, clearFields} = UseForm({
        name: "",
        email: "",
        cpf: ""
    })
    const navigate = useNavigate()
    const submit = (event) => {
        event.preventDefault()
        clearFields()
        editProfile(form, clearFields, navigate)
    }
    
    return (
        <ContainerUpDateProfile>
            <h3 className="myUpDateProfile">
            <img onClick={()=> goToProfile(navigate)} src={back} alt={"back"}/>
                Editar
                </h3>
        <ContainerInput>
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
                <Button variant="contained" color={"primary"} type="submit" >Salvar</Button>
            </form>
        </ContainerInput>
        </ContainerUpDateProfile>
    )   
}
export default EditProfile