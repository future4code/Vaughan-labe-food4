import styled from "styled-components";


export const Title = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 1px;
    h2{
        font-size: 15px;
        font-weight: 500;    
    }
`
export const LoadingStyle = styled.div`
    position: absolute;
    top: 50vh;
    left: 47.5vw;
    border: 6px solid #BEFFA2;
    border-top-color: #6CC247;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: is-rotating 2s infinite;
    @keyframes is-rotating {
    to {
    transform: rotate(1turn);
    }
}
`
