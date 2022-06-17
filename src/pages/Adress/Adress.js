import React, { useState } from "react"
import Back from '../../assets/back.png'
import { CircularProgress, TextField } from "@mui/material"
import UseForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { ContainerInput, Button, PageTittleContainer, TittleNavContainer, BackImg } from "./styled"
import { adress } from "../../services/Requests"
import { goToFeed } from "../../routes/coordinator"
import { alerts } from "../../constants/alerts"

const Adress = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
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
    adress(form, clearFields, navigate, setIsLoading)
    clearFields()
  }

  const alert = () => {
    alerts("error", "O usuário precisa cadastrar um endereço!")
  }

  return (

    <div>
      <PageTittleContainer>
        <TittleNavContainer>
          <BackImg src={Back} alt="Ícone de voltar" onClick={alert} />
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
          <Button variant="contained" color={"primary"} type="submit" >{isLoading ? <CircularProgress color="inherit" size={24} /> : <>Salvar</>}</Button>
        </form>
      </ContainerInput>
    </div>
  )

}
export default Adress   