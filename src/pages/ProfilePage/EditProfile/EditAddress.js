import React from "react"
import UseForm from "../../../hooks/useForm"
import { TextField } from "@mui/material"
import { ContainerInput2, TittleNavContainer, PageTittleContainer, BackImg, Button} from "./styled";
import Back from "../../../assets/back.png"
import { goToProfile } from "../../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { UpDateAdress } from "../../../services/Requests"

const EditAddress = () => {
  const navigate = useNavigate()
  const { form, onChange, clearFields } = UseForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })
  const submit = (event) => {
    event.preventDefault()
    UpDateAdress(form, clearFields, navigate)
    clearFields()
  }
  return (
    <ContainerInput2>

      <PageTittleContainer>
        <TittleNavContainer>
          <BackImg src={Back} onClick={() => goToProfile(navigate)} />
          <p>Endereço</p>
        </TittleNavContainer>
      </PageTittleContainer>

      <form onSubmit={submit}>
        <TextField
          name={"street"}
          placeholder="Rua/Av."
          value={form.street}
          label={"Rua"}
          type={"text"}
          required
          onChange={onChange}
        />
        <TextField
          name={"number"}
          type={"number"}
          placeholder="Número"
          value={form.number}
          label={"Número"}
          required
          onChange={onChange}
        />
        <TextField
          name={"complement"}
          placeholder="Apto./Bloco"
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
        
        <Button type="submit">Salvar</Button>
      </form>
    </ContainerInput2>
  )
}

export default EditAddress