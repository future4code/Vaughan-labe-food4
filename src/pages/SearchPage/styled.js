import styled from "styled-components";
import { Box } from '@mui/material'

export const InfoRestaurant = styled(Box)`
    display: flex;
    justify-content: space-between;
`
export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
@media screen and (max-width: 376px){ 
   margin: 14px;
}
@media screen and (max-width: 321px){ 
   width: 315px;
}
`

export const ContainerSearch = styled.div`
@media screen and (max-width: 376px){ 
   margin: 14px;
}
@media screen and (max-width: 321px){ 
   width: 300px;
}
`
export const PageTittleContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
`
export const TittleNavContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    width: 360px;
    height: 44px;
    margin-top: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`
export const BackImg = styled.img`
    position: fixed;
    left: 16px;
    width: 15px;
    height: 15px;
`
export const TextRest = styled.p`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
`
export const Container =styled.div`
margin-top: 40px;
margin-bottom:75px;
    display: flex;
    flex-direction: row;

` 
