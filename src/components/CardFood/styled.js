import styled from 'styled-components'
import { Box, CardMedia } from '@mui/material'

export const InfoRestaurant = styled(Box)`
  display: flex;
  justify-content: space-between;
`
export const BoxBotton = styled(Box)`
display: flex;
justify-content: space-between;


`
export const StyleButton = styled.button`
font-size: 13px;
border-color: #6AC453;
color: #6AC453;
background: white;
border-radius: 8px 0px 0px 0px;
:hover{
  background-color: #E2FFD5;
}
`
export const CardMediaStyle = styled(CardMedia)`
    margin-right: -50px;
`
export const LoadingStyle = styled.div`
    position: absolute;
    top: 40vh;
    left: 45vw;
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
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
  width: 340px;
  height: 120px;
`
export const TitleCategory = styled.p`
  width: 100%;
  font-size: 18px ;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`
export const ImgStyle = styled.img`
  border-radius: 15px 0 0 15px;
  width: 112px;
  height: 120px;
`
export const Button = styled.button`
  height: 30px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 120px;
  margin-top: -26px;
  border-top: 1px solid #5cb646;
  border-left: 1px solid #5cb646;
  border-right: none;
  border-bottom: none;
  border-radius: 8px 0 0 0;
  color: #6cc247;
  background: none;
  font-size: 12px;
`

export const DivInfo = styled.div`
  display: flex;
`
export const ConainerBottom = styled.div`
  margin-left: 20px;
.popup{
  position: fixed;
  top: 50%;
  left: 20px;
  width: 328px;
  background-color: #fff;
  height: 30vh;
  display: none;
}
`
export const StyleSelect = styled.select`
  border: 1px solid #c5c5c5;
  background-color: white;
  border-radius: 5px;
  width: 296px;
  height: 56px;
`
export const ContainerPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const ButtonPopup = styled.a`
  color: #5cb646;
  font-size: 16px;
  text-transform: uppercase;
`
export const DivButtonPopup = styled.div`
  display: flex;
  margin-left: 100px;
`
export const TitlePopup = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 470;
`
export const Description = styled.p`
  font-size: 12px;
  color: #a3a398;
  line-height: 16px;
  margin-top: -10px;
`
export const NameFood = styled.p`
  font-size: 16px;
  color: #5cb646;
`
export const PriceFood = styled.p`
  font-size: 17px;
`
