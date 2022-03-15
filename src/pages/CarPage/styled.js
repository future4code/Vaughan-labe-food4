import styled from "styled-components";

export const ContainerCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
height: 100%;


.payments{
    display: flex;
    flex-direction: column;
    width: 90%;

    .frete{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        height: 30px;
    }

    .priceAll{
        display: flex;
        justify-content: space-between;
    }
}
`