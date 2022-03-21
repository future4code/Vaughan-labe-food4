import { TextField } from "@mui/material"
import React from "react"
import { ContainerInput, ContainerUpDateProfile, PageTittleContainer, 
TittleNavContainer, BackImg, Button} from "./styled"
import Back from '../../../assets/back.png'
import { goToProfile } from "../../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import UseForm from "../../../hooks/useForm"
import { editProfile } from "../../../services/Requests"

export const EditProfile = () => {
    const { form, onChange, clearFields } = UseForm({
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

            <PageTittleContainer>
                <TittleNavContainer>
                    <BackImg src={Back} onClick={() => goToProfile(navigate)} />
                    <p>Editar</p>
                </TittleNavContainer>
            </PageTittleContainer>

            <ContainerInput>
                <form onSubmit={submit}>
                    <TextField
                        name={"name"}
                        placeholder="Nome e sobrenome"
                        value={form.name}
                        label={"Nome"}
                        type={"text"}
                        required
                        onChange={onChange}
                    />
                    <TextField
                        name={"email"}
                        placeholder="email@email.com"
                        value={form.email}
                        label={"E-mail"}
                        type={"email"}
                        required
                        onChange={onChange}
                    />
                    <TextField
                        name={"cpf"}
                        placeholder="000.000.000-00"
                        value={form.cpf}
                        label={"Cpf"}
                        required
                        onChange={onChange}
                    />
                    <Button type="submit">Salvar</Button>
                </form>
            </ContainerInput>
        </ContainerUpDateProfile>
    )
}
export default EditProfile