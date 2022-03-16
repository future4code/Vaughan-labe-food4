import styled from "styled-components"
export const ContainerProfile = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;

.myCart{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    height: 40px;
}
`
export const ContainerInfoProfile = styled.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    height: 100%;
    justify-content: flex-start;
`
export const ContainerImgProfile = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: flex-end;
    button{
        color: #eeeeee;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 6.5em;
        margin: 0 20px ;
        display: flex;
        right: -0.35rem;
        img{
            width: 34px;
            height: 34px;
        }
    }
`

export const ContainerMap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
`
export const ContainerAddress = styled.div`
    position: relative;
    bottom: 8rem;
    background-color: #eeeeee;
    p{
        text-align: center;
    }
`