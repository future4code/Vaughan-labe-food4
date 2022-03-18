import styled from "styled-components";
export const ContainerInput = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
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
export const ContairnerImg = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 65px;
    img{
        display: grid;
        justify-content: center;
        align-items: center;
        width: 104px;
    }
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
    width: 340px;
:hover{
    background-color: #A2E884;
}
`