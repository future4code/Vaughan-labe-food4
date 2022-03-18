import styled from "styled-components"
import { Box } from '@mui/material'
import {Swiper} from 'swiper/react'

export const Title = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 1px;
    h2{
        font-size: 15px;
        font-weight: 500;    
    }
`
export const LoadingStyle = styled.div`
    position: absolute;
    top: 50vh;
    left: 47.5vw;
    border: 6px solid #BEFFA2;
    border-top-color: #6CC247;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: is-rotating 2s infinite;
    @keyframes is-rotating {
    to {
    transform: rotate(1turn);
    }
}
`
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
export const Container =styled.div`
margin-bottom:75px;
.Cont{
    display: flex;
    flex-direction: row;
}
` 
export const MySwiper =styled(Swiper)`
display: flex;


`