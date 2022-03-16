import React from "react"
import { ContainerInfoProfile, Ellen } from "./styled"

export const CardProfile = ({name, profile, cpf, address})=>{
    return(
        <ContainerInfoProfile>
        <p>{name}</p>
        <p>{profile}</p>
        <p>{cpf}</p>
        <Ellen>
        <p>{address}</p>
        </Ellen>
        
        </ContainerInfoProfile>
    )
}
export default CardProfile