import React, { useEffect } from "react";
import NavBarProfile from "../../components/NavBar/NavBarPorfile";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { ContainerProfile, ContainerInfoProfile, ContainerImgProfile, PageTittleContainer, TittleNavContainer, ContainerMap, ContainerAddress } from "./styled";
import edit from "../../assets/edit@2x.png"
import { useNavigate } from "react-router-dom";
import { goToEditAddress, goToEditLogin } from "../../routes/coordinator";

const ProfilePage = () => {
  const getProfile = useRequestData([], `${BASE_URL}/profile`)
  const navigate = useNavigate()
  const historyOrden = useRequestData([], `${BASE_URL}/orders/history`)
  useEffect(() => {

  }, [historyOrden])
  console.log(historyOrden)
  return (
    <ContainerProfile>

      <PageTittleContainer>
        <TittleNavContainer>
        <p>Meu perfil</p>
        </TittleNavContainer>
      </PageTittleContainer>
      
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
        </ContainerAddress>
      </ContainerInfoProfile>
      <NavBarProfile />
    </ContainerProfile>
  )
}

export default ProfilePage