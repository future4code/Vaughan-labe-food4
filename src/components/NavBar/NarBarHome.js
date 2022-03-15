import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import avatar from "../../assets/avatar.png"
import homepage from "../../assets/homepageGreen.png"
import Cart from "../../assets/shopping-cart.png"
import { ContainerNavBar } from './styled';
import { goToCar, goToProfile } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


 const NavBarHome = () => {
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
        <BottomNavigationAction  icon={<img src={homepage} className="avatar"/>} />
        <BottomNavigationAction  icon={<img src={Cart} className="avatar"/>}  onClick={()=> goToCar(navigate)}/>
        <BottomNavigationAction  icon={<img src={avatar} className="avatar"/>}  onClick={()=> goToProfile(navigate)}/>
      </BottomNavigation>
    </Box>
    </ContainerNavBar>
  );
}
export default NavBarHome;