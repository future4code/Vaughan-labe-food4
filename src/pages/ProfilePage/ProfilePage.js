import React, { useEffect } from "react";
import NavBarProfile from "../../components/NavBar/NavBarPorfile";
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/url"
import { ContainerProfile, ContainerInfoProfile, ContainerImgProfile, ContainerMap, ContainerAddress} from "./styled";
import edit from "../../assets/edit@2x.png"
// import CardProfile from "./CardProfile/CardProfile";
const ProfilePage = () => {
 
  const getProfile = useRequestData([], `${BASE_URL}/profile`)
  const historyOrden = useRequestData([], `${BASE_URL}/orders/history`)
  console.log(historyOrden)
  useEffect(()=>{

  }, [historyOrden])
  const editProfile = () =>{
    console.log("clicou")
  }
  // const gettingProfile = getProfile?.map((profile)=>{
  //   return(
  //     <>
  //     <CardProfile
  //     key={profile.id}
  //     name={profile.user?.name}
  //     profile={profile.user?.email}
  //     cpf={profile.user?.cpf}
  //     address={profile.user?.address}
  //     />
  //     </>
  //   )
  // })
  return (
    <ContainerProfile>
      <h3 className="myCart">Meu Perfil</h3>
      <ContainerInfoProfile>
        <ContainerImgProfile>
        <button onClick={editProfile}><img src={edit} alt={"Imagem de editar"} /></button>
      </ContainerImgProfile>
      
      {getProfile && getProfile?.map((profile)=>{
        return(
          <ContainerMap>
          <p>{profile.user?.name}</p>
          <p>{profile.user?.email}</p>
          </ContainerMap>
        )
      })}
      <ContainerAddress>
      <p>Endereço</p>
      <h3>{getProfile && getProfile[0]?.user?.address}</h3>
      </ContainerAddress>
      </ContainerInfoProfile>
      <NavBarProfile/>  
    </ContainerProfile>
  )
}

export default ProfilePage