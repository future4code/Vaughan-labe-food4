import styled from "styled-components";
import { Button} from "@mui/material";

export const ContainerCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
height: 100%;

.myCart{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    height: 35px;
    margin-bottom: 0px;
}
.address{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    background-color: #eeeeee;
    height: 12vh;
    width: 100%;
    .p1{
        color: #b8b8b8;
        width: 90%;
        margin-bottom: 0px;
    }
    .p2{
        color: #000;
        font-size: 16px;
        width: 90%;
        margin-top: 0px;
    }
}
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
.navbar{
    width: 100%;
}

.button{
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 8vh;
}
`
export const ButtonStyle = styled(Button)`
width: 90%;
border-radius: 1px;
`