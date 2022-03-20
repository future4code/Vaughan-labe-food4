import styled from "styled-components";

export const ContainerInput = styled.div`
    margin-top: 70px;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    .address {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    height: 40px;
    }
    form{
        display: grid;
        gap: 1rem;
        width: 90vw;
        height: 60vh;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 550;
        font-size: 16px;
        text-align: center;
    }
`
export const ContairnerImg = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 10px;
`
export const LogoImg = styled.img`
        display: grid;
        justify-content: center;
        align-items: center;
        width: 104px;
`
export const ContainerField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    font-size: 16px;
    font-weight: 500;
    background-color: #5cb646;
    border: none;
    border-radius: 4px;
    height: 42px;
    width: 100%;
:hover{
    background-color: #A2E884;
}
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
    width: 360px;
    height: 44px;
    margin-top: 20px;
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
export const ErrorPassword = styled.h1`
    color: red;
    font-size: 12px;
`