import React, { useContext } from "react";
import { useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  ContainerCard,
  ContainerPopup,
  DivButtonPopup,
  StyleSelect,
  TitlePopup,
} from "./styled";

const Card = ({
  photo,
  name,
  description,
  price,
  foodAll,
  quantityA,
  openQuantity,
}) => {
  const { cart, setCart, food } = useContext(GlobalStateContext);
  const [quantity, setQuantity] = useState(0);

  const exitQuantify = () => {
    document.querySelector(`.popup-wrapper`).style.display = `none`;
  };

  const addToCart = (food) => {
    const newCart = [...cart];
    const findIndex = newCart.findIndex((productCart) => {
      return productCart.id === food.id;
    });
    if (findIndex === -1) {
      newCart.push({ ...food, quantity: Number(quantity) });
    } else {
      alert("item ja exite no carrinho");
    }
    setCart(newCart);
    exitQuantify();
  };

  const removeTheFood = () => {
    const position = cart.findIndex((food) => {
      return food.id === foodAll.id;
    });

    let newCart = [...cart];

    if (newCart[position].quantity === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].quantity -= 1;
    }
    setCart(newCart);
  };

  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  if (quantityA === undefined) {
    const index = cart.findIndex((item) => item.id === foodAll.id);
    if (index !== -1) {
      quantityA = cart[index].quantity;
    }
  }

  return (
    <ContainerCard>
      <div className="photo">
        <img src={photo} alt={`foto de um ${name}`} />
      </div>

      <div className="infos">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="price">R${price}</p>
      </div>
      <div className="popup-wrapper">
        <div id="popup" className="popup">
          <ContainerPopup>
            <TitlePopup>Selecione a quantidade desejada</TitlePopup>
            <StyleSelect onChange={onChange}>
              <option value={1}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </StyleSelect>
            <DivButtonPopup>
              <button className="ButtonPopup" onClick={() => addToCart(food)}>
                Adicionar ao carrinho
              </button>
            </DivButtonPopup>
          </ContainerPopup>
        </div>
      </div>

      <div className="last">
        {quantityA > 0 ? (
          <>
            <button className="quantity">{quantityA}</button>
            <button onClick={() => removeTheFood()} className="remove">
              remover
            </button>
          </>
        ) : (
          <div className="add">
            <button onClick={openQuantity} className="add-btn">
              Adiconar
            </button>
          </div>
        )}
      </div>
    </ContainerCard>
  );
};

export default Card;
