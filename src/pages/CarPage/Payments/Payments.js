import { FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import IconCheckboxes from "./IconCheckBoxes";
import { ContainerForm} from "./styled";

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
            arrayPayment.push("money");
        }else {
            arrayPayment.push("creditCard");
        }
    };

    const mudar = () => {
        if(money === true){
            return creditCard === false
        }else if(creditCard === true){
            return money === false
        }
        
    }

    const body = {
        products: [{
            id: "",
            quantity: ""
        }, {
            id: "",
            quantity: ""
        }],
        paymentMethod: paymentMethod()
    }
    return (
        <ContainerForm>
            <h3 className="payment">Formas de pagamento</h3>
            <FormGroup color="color2">
                {console.log(mudar())}
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
        </ContainerForm>
    )
}

export default Payments;