import styled from "styled-components"
export const ContainerProfile = styled.div`
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
    
}
.edit{
    margin-right: 20px;
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
    margin: 0 25px;
    p{
        
        font-size: 18px;
    }
    
`
export const ContainerAddress = styled.div`
    position: relative;
    bottom: 8rem;
    background-color: #eeeeee;
    p{
        display: flex;
        justify-content: space-between;
        color:#b8b8b8;
        img{
            width: 34px;
            height: 34px;
            
        }
        
    }
`
export const PageTittleContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;
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
    font-size: 16px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`