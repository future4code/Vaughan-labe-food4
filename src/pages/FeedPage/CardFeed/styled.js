import styled from "styled-components"
import { Box } from '@mui/material'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const LoadingStyle = styled.div`
    position: absolute;
    top: 50vh;
    left: 42vw;
    border: 6px solid #BEFFA2;
    border-top-color: #6CC247;
    width: 45px;
    height: 45px;
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