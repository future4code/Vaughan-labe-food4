import styled from "styled-components";
import { Button} from "@mui/material";

export const ContainerForm = styled.div`
.payment{
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
    width: 100%;
    margin: 0;
}
.button{
    position: fixed;
    display: flex;
    justify-content: flex-start;   
    width: 100%;
    bottom: 8vh;
}
`
export const ButtonStyle = styled(Button)`
width: 90%;
border-radius: 1px;
`