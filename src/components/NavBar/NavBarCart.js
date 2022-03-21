import React from 'react'
import {Box, BottomNavigation, BottomNavigationAction} from '@mui/material'
import avatar from "../../assets/avatar.png"
import homepage from "../../assets/homepage.png"
import Cart from "../../assets/cartGreen.png"
import { ContainerNavBar } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToProfile } from '../../routes/coordinator'


 const NavBarCart = () => {
  const navigate = useNavigate()  
  const [value, setValue] = React.useState(0);

  return (
    <ContainerNavBar>
    <Box sx={{ width: 400 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  icon={<img src={homepage} alt="Ícone Home" className="avatar"/>} onClick={()=> goToFeed(navigate)}/>
        <BottomNavigationAction  icon={<img src={Cart} alt="Ícone Carrinho de Compras" className="avatar"/>} />
        <BottomNavigationAction  icon={<img src={avatar} alt="Ícone Perfil" className="avatar"/>} onClick={()=> goToProfile(navigate)}/>
      </BottomNavigation>
    </Box>
    </ContainerNavBar>
  );
}
export default NavBarCart;