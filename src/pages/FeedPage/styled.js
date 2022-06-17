import styled from "styled-components"

export const ContainerSearch = styled.div`
@media screen and (max-width: 376px){ 
   margin: 14px;
}
@media screen and (max-width: 321px){ 
   width: 300px;
}
@media screen and (min-width: 414px){ 
   margin-top: 20px;
}
@media screen and (min-width: 384px){ 
   margin-top: 20px;
}
`
export const Container =styled.div`
margin-top: 40px;
margin-bottom:75px;
.Cont{
    display: flex;
    flex-direction: row;
}
` 
export const PageTittleContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
`
export const TittleNavContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin-top: 20px;
    width: 360px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`