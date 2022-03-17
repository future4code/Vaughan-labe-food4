import styled from "styled-components";
import { Button} from "@mui/material";
import { FormGroup } from "@mui/material";

export const ContainerForm = styled.div`
.paymentTitle{
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
    width: 100%;
    margin: 5px;
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
export const FormPayment = styled(FormGroup)`
width: 100%;
margin: 0px 5px 0px 13px;
`