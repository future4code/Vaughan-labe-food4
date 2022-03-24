import styled from "styled-components"

export const ContainerUpDateProfile = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;

.myUpDateProfile{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    height: 40px;
    img{
        position: fixed;
        left: 25px;
        width: 24px;
        height: 24px;
    }
}
`
export const ContainerInput = styled.div`
    display: grid;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
    width: 100vw;
    form{
        display: grid;
        gap: 17px;
        width: 90vw;  
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
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
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
export const Button = styled.button`
    font-size: 16px;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    background-color: #5cb646;
    border: none;
    border-radius: 4px;
    height: 42px;
    width: 100%;
:hover{
    background-color: #A2E884;
}
`
export const ContainerInput2 = styled.div`
    display: grid;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
    width: 100vw;
    form{
        display: grid;
        gap: 17px;
        width: 90vw;  
    }
`
