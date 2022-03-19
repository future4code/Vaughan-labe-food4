import React from "react"
import Back from '../../assets/back.png'
import { TextField } from "@mui/material";
import UseForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ContainerInput, Button, PageTittleContainer, TittleNavContainer, BackImg } from "./styled";
import { adress } from "../../services/Requests";
import { goToLogin } from "../../routes/coordinator";
import back from "../../assets/back.png"

const Adress = () => {
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
    adress(form, clearFields, navigate)
    console.log(form)
    clearFields()
  }
  return (

    <div>
      <PageTittleContainer>
        <TittleNavContainer>
          <BackImg src={Back} onClick={() => goToLogin(navigate)} />
        </TittleNavContainer>
      </PageTittleContainer>

      <ContainerInput>
        
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
            type={"text"}
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
    </div>
  )

}
export default Adress   