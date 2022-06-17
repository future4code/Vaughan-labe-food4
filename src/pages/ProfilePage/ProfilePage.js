import React, { useEffect } from "react"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import NavBarProfile from "../../components/NavBar/NavBarPorfile"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { ContainerProfile, ContainerInfoProfile, Title, ContainerImgProfile, AdressIcon,IconPosition,
ContainerMap, ContainerAddress, PageTittleContainer, TittleNavContainer, ContainerHistory, ContainerMapHistory } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToEditAddress, goToEditLogin } from "../../routes/coordinator"
import UseProtectPage from "../../hooks/useProtectPage"

const ProfilePage = () => {

  UseProtectPage()
  const navigate = useNavigate()
  const getProfile = useRequestData([], `${BASE_URL}/profile`)
  const historyOrden = useRequestData([], `${BASE_URL}/orders/history`)
  
  useEffect(() => {
  
  }, [historyOrden])

  return (
    <ContainerProfile>

      <PageTittleContainer>
          <TittleNavContainer>
            <p>Meu perfil</p>
          </TittleNavContainer>
        </PageTittleContainer>

      <ContainerInfoProfile>

        <ContainerImgProfile>
          <EditOutlinedIcon onClick={() => goToEditLogin(navigate)} />
        </ContainerImgProfile>

        {   getProfile && getProfile?.map((profile) => {
          return (
            <ContainerMap>
              
              <p className="p1">{profile.user?.name} </p>
              <p className="p2"> {profile.user?.email}</p>
              <p className="p3">{profile.user?.cpf}</p>
            </ContainerMap>
          )
        })}
        <ContainerAddress>

          <AdressIcon>
          <p>Endereço cadastrado</p>
          <IconPosition>
          <EditOutlinedIcon onClick={() => goToEditAddress(navigate)} />
          </IconPosition>
          </AdressIcon>

          <h2>{getProfile && getProfile[0]?.user?.address} </h2>

          <ContainerMapHistory>
          <Title >Histórico de pedidos</Title>

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