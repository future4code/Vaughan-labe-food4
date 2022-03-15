import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import IconCheckboxes from "./IconCheckBoxes";
import { ButtonStyle, ContainerForm} from "./styled";

const Payments = () => {
    const [money, setMoney] = useState(false)
    const [creditCard, setCreditCard] = useState(false)

    const onChangeMoney = (e) => {
        setMoney(e.target.checked)
    }

    const onChangeCreditCard = (e) => {
        setCreditCard(e.target.checked)
    }
    const paymentMethod = () => {
        const arrayPayment = [];

        if (money) {
            arrayPayment.push("Dinheiro");
        }

        if (creditCard) {
            arrayPayment.push("Cartão de crédito");
        }
        return
    };


    return (
        <ContainerForm>
            <h3 className="payment">Formas de pagamento</h3>
            <FormGroup color="color2">
                <FormControlLabel
                    control={<IconCheckboxes />}
                    onChange={onChangeMoney}
                    checked={money}
                    label="Dinheiro" 
                />

                <FormControlLabel
                    control={<IconCheckboxes/>}
                    onChange={onChangeCreditCard}
                    checked={creditCard}
                    label="Cartão de Crédito"
                 />

            </FormGroup>
            <ButtonStyle variant="contained" color={"primary"}>Confirmar</ButtonStyle>
        </ContainerForm>
    )
}

export default Payments;