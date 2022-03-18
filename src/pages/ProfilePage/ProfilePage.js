import React, { useEffect } from "react";
import NavBarProfile from "../../components/NavBar/NavBarPorfile";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import {
  ContainerProfile, ContainerInfoProfile, ContainerImgProfile, ContainerMap,
  ContainerAddress, ContainerHistory, ContainerMapHistory
} from "./styled";
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
      <h3 className="myUpDateProfile">Meu Perfil</h3>

      <ContainerInfoProfile>
        <ContainerImgProfile>
          <button onClick={() => goToEditLogin(navigate)}><img onClick={() => goToEditLogin(navigate)} src={edit} alt={"Imagem de editar"} /></button>
        </ContainerImgProfile>

        {getProfile && getProfile?.map((profile) => {
          return (
            <ContainerMap>
              <p className="p1">{profile.user?.name} </p>
              <p className="p2"> {profile.user?.email}</p>
              <p className="p3">{profile.user?.cpf}</p>
            </ContainerMap>
          )
        })}
        <ContainerAddress>
          <p>Endereço cadastrado<img onClick={() => goToEditAddress(navigate)} src={edit} alt={"back"} className="edit" /></p>
          <h2>{getProfile && getProfile[0]?.user?.address} </h2>
          <ContainerMapHistory>

            <h3>Histórico de pedidos</h3>
            {historyOrden[0].orders?.length === 0 ? <h2>Você não realizou nenhum pedido</h2> :
              <>{historyOrden && historyOrden[0]?.orders?.map((history) => {
                let price = history.totalPrice.toFixed(2)
                let date = new Date(history.createdAt)
                return (
                  <ContainerHistory>
                    <p className="p1History">{history.restaurantName}</p>
                    <p className="p2History">
                      {date.toLocaleString()}
                    </p>

                    <p className="p3History">SUBTOTAL R${price}</p>
                  </ContainerHistory>
                )
              })}</>}
          </ContainerMapHistory>
        </ContainerAddress>

      </ContainerInfoProfile>
      <NavBarProfile />
    </ContainerProfile>
  )
}

export default ProfilePage