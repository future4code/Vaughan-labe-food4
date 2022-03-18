import styled from "styled-components";
import { Box } from '@mui/material'

export const Title = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 1px;
    h2{
        font-size: 15px;
        font-weight: 500;
        
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

export const H2 = styled.h2`
    display: flex;
    padding-left: 100px;
`