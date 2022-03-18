import React, { useEffect } from "react";
import NavBarProfile from "../../components/NavBar/NavBarPorfile";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { ContainerProfile, ContainerInfoProfile, ContainerImgProfile, ContainerMap, ContainerAddress } from "./styled";
import edit from "../../assets/edit@2x.png"
import { useNavigate } from "react-router-dom";
import {  goToEditAddress, goToEditLogin } from "../../routes/coordinator";

const ProfilePage = () => {
  const getProfile = useRequestData([], `${BASE_URL}/profile`)
  const navigate = useNavigate()
  const historyOrden = useRequestData([], `${BASE_URL}/orders/history`)
  
  useEffect(() => { 

  }, [historyOrden])
  console.log(historyOrden[0].orders)
  return (
    <ContainerProfile>
      <h3 className="myUpDateProfile">Meu Perfil</h3>
      
      <ContainerInfoProfile>
        <ContainerImgProfile>
          <button onClick={()=> goToEditLogin(navigate)}><img onClick={()=> goToEditLogin(navigate)} src={edit} alt={"Imagem de editar"} /></button>
        </ContainerImgProfile>

        {getProfile && getProfile?.map((profile) => {
          return (
            <ContainerMap>
              <p>{profile.user?.name} </p>
              <p>{profile.user?.email}</p>
            </ContainerMap>
          )
        })}
        <ContainerAddress>
          <p>Endereço <img onClick={()=> goToEditAddress(navigate)} src={edit} alt={"back"} className="edit"/></p>
          <p>{getProfile && getProfile[0]?.user?.address} </p>
          <>
          <h2>Historico De pedido</h2>
          {historyOrden[0]?.length < 0 ? "" :
           <>{historyOrden && historyOrden[0]?.orders?.map((history)=>{
            let date = new Date(history.createdAt) 
            return(
            <>
            <h2>{history.restaurantName}</h2>
            
             <p>Data:{date.toLocaleString()}</p> 
            
            <h2>{history.totalPrice}</h2>
            </>
           )})}</>}
          </>
        </ContainerAddress>
        
      </ContainerInfoProfile>
      <NavBarProfile />
    </ContainerProfile>
  )
}

export default ProfilePage