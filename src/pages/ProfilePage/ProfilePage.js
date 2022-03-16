import React from "react";
import NavBarProfile from "../../components/NavBar/NavBarPorfile";
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/url"
import { ContainerProfile, ContainerInfoProfile, ContainerImgProfile, Ellen } from "./styled";
import edit from "../../assets/edit@2x.png"
import CardProfile from "./CardProfile/CardProfile";
const ProfilePage = () => {
  const ordersHistory = useRequestData([], `${BASE_URL}/orders/history`)
  const getProfile = useRequestData([], `${BASE_URL}/profile`)
  console.log(ordersHistory && ordersHistory)
  console.log(getProfile)
  const ellenMinhaVida = getProfile?.map((profile)=>{
    return(
      <>
      <CardProfile
      name={profile.user?.name}
      profile={profile.user?.email}
      cpf={profile.user?.cpf}
      address={profile.user?.address}
      />
      </>
    )
  })
  return (
    <ContainerProfile>
      <h3 className="myCart">Meu Perfil</h3>
      <ContainerInfoProfile>
        <ContainerImgProfile>
      <img src={edit} alt={"Imagem de editar"} />
      </ContainerImgProfile>
      {ellenMinhaVida}
      {/* {getProfile && getProfile.map((profile)=>{
          return(
            <>
            <p key={profile.id}>{profile.user?.name}</p>
            <p key={profile.id}>{profile.user?.email}</p>
            <p key={profile.id}>{profile.user?.cpf}</p>
            <Ellen>
            <h4>Endereço cadastro</h4>
            <p key={profile.id}>{profile.user?.address}</p>
            </Ellen>
            </>
          )
      })} */}
      
      </ContainerInfoProfile>
      <NavBarProfile/>  
    </ContainerProfile>
  )
}

export default ProfilePage