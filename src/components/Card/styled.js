import styled from "styled-components"

export const ContainerCard = styled.div`
display: grid;
grid-template-columns: 115px 1fr 99px;

width: 370px;
height: 112px;

border: 1px solid #b8b8b8;
border-radius: 10px 10px 10px 10px;
margin-bottom: 10px;
.photo{
  img{
    height: 111px;
    width: 115px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
}
.infos{
    width: 100px;
    height: 111px;
    margin-left: 15px;
    .name{
        color: #5CB646;
        width: 250px;
        font-weight: bolder;
        margin: 10px 0px 10px 0px;
    }
    .description{
        font-size: 14px;
        width: 250px;
        margin: 16px 0px;
        color: #b8b8b8;
    }
    .price{
        margin: 10px 0px 0px 0px;
        font-size: 16px;
        color: #000;
        letter-spacing: -0.39px;
    }
}
.last{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 100px;
  height: 111px;
    
  .quantity{
    width: 33px;
    height: 33px;
    margin: 0px 0px 0px 16px;
    padding: 7px 12px;
    border-radius: 0px 10px;
    border: solid 1px #5cb646;

    color: #5cb646;
    background: transparent;
  }
  .remove{
    width: 90px;
    height: 31px;

    border-radius: 10px 0px 10px 0px;
    border: 1px solid #e02020;

    background: transparent;
    color: #e02020;
  }
  .add{
  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    width: 100px;
    height: 113px;

    .add-btn{
    width: 90px;
    height: 31px;

    border-radius: 10px 0px 10px 0px;
    border: 1px solid #5CB646;

    background: transparent;
    color: #5CB646;
    }
  }
}
.popup-wrapper{
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  .popup{
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin-top: 13.125rem;
    margin-left: 1.125rem;
    text-align: center;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background: #fff;
    position: relative;
  }
}
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
  font-family: 'Roboto', sans-serif;
  font-weight: 550;
  font-size: 16px;
  text-transform: uppercase;
`
export const StyleSelect = styled.select`
  border: 1px solid #c5c5c5;
  background-color: white;
  border-radius: 5px;
  width: 296px;
  height: 56px;
`
export const DivButtonPopup = styled.div`
  display: flex;
  margin-left: 100px;
  .ButtonPopup{
  color: #5cb646;
  font-family: 'Roboto', sans-serif;
  font-weight: 550;
  font-size: 16px;
  text-transform: uppercase;
  }
`


export const TitlePopup = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 470;
`