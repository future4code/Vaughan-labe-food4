import React from 'react'
import {Box, BottomNavigation, BottomNavigationAction} from '@mui/material'
import avatar from "../../assets/avatar.png"
import homepage from "../../assets/homepageGreen.png"
import Cart from "../../assets/shopping-cart.png"
import { ContainerNavBar } from './styled'
import { goToCar, goToProfile } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


 const NavBarHome = () => {
  const navigate = useNavigate()  
  const [value, setValue] = React.useState(0)

  return (
    <ContainerNavBar>
    <Box sx={{ width: 400}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  icon={<img src={homepage} alt="Ícone Home" className="avatar"/>} />
        <BottomNavigationAction  icon={<img src={Cart} alt="Ícone Carrinho de Compras" className="avatar"/>}  onClick={()=> goToCar(navigate)}/>
        <BottomNavigationAction  icon={<img src={avatar} alt="Ícone Perfil" className="avatar"/>}  onClick={()=> goToProfile(navigate)}/>
      </BottomNavigation>
    </Box>
    </ContainerNavBar>
  );
}
export default NavBarHome;