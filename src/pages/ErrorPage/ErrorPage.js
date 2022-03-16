import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToFeed } from '../../routes/coordinator'
import { GifErro, ImgLogo, Button, Text1, ContainerText1, Text2, ContainerText2 } from './styled'
import Logo from '../../assets/logo-future-eats-invert@2x.png'
import ErrorGif from '../../assets/ErroGif.gif'

const ErrorPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const onClickGoStart = () => {
    if (token) {
      goToFeed(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
    <div>
      <ImgLogo src={Logo} alt="Logo FutureEates" />

      <div>
        <ContainerText1>
          <Text1>Puxa, esta página não existe</Text1>
        </ContainerText1>

        <ContainerText2>
          <Text2>Confira se você digitou algo errado. Talvez o endereço
            não esteja mais disponível na web.</Text2>
        </ContainerText2>
      </div>

      <div>
        <Button onClick={onClickGoStart}>Ir para o início</Button>
      </div>

      <GifErro src={ErrorGif} alt="Imagem" />
    </div>
  )
}

export default ErrorPage