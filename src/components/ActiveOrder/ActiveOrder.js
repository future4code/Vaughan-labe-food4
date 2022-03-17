import * as React from 'react';
import { BASE_URL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ContainerOrder } from './styled';
import { useEffect } from 'react';

const ActiveOrder = () => {
    const [order] = useRequestData([], `${BASE_URL}/active-order`)
   useEffect(()=>{

   },[order])
    
  return (
      <>
      {order?.order === null? "" :
    <ContainerOrder>
        <div className='icon'>
            <AccessTimeIcon fontSize='large'/>
        </div>

        <div>
            <h3>Pedido em andamento</h3>
            <h4>{order?.order && order?.order.restaurantName}</h4>
            <h4>SUBTOTAL R$ {order?.order && order?.order.totalPrice}</h4>
        </div>
    </ContainerOrder>}
    </>
  );
}

export default ActiveOrder