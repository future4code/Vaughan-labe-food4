import styled from "styled-components"

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerFoods = styled.div`
    display: flex;
    gap:20px;
`
export const PageTittleContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
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
    height: 44px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`
export const BackImg = styled.img`
    position: fixed;
    left: 16px;
    width: 15px;
    height: 15px;
`