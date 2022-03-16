import React from "react"
import { ContainerInfoProfile, CardAddres } from "./styled"

export const CardProfile = ({name, profile, cpf, address})=>{
    return(
        <>
        <ContainerInfoProfile>
        <h3>
        {name}
        </h3>
        <h3>{profile}</h3>
        <p>{cpf}</p> 
        </ContainerInfoProfile>
        <CardAddres>
        <p>Endereço cadastrado</p>
        <p>{address}</p>
        </CardAddres>
        </>
    )
}
export default CardProfile