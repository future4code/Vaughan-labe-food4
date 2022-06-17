import styled from "styled-components";

export const ContainerOrder = styled.div`
display: grid;
grid-template-columns: 100px 1fr;
justify-items: start;
align-items: center;

background-color: #5CB646;
width: 100%;
height: 17vh;
position: fixed;
bottom: 50px;
.icon{
  margin-left: 30px;
  color: white;
}
h4{
    margin: 5px;
}
`
export const TitleOrder = styled.p`
    color: #fff;
    font-size: 16;
    font-weight: 550;
    margin: 5px;
`
export const PriceOrder = styled.p`
    font-size: 16;
    font-weight: bold;
    margin: 5px;
`