import styled from "styled-components";

export const ContainerInput = styled.div`
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
        font-size: 16px;
        text-align: center;
    }
`
export const BackImg = styled.img`
    position: fixed;
    left: 25px;
    width: 24px;
    height: 24px;
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
