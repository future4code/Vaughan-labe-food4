import styled from "styled-components"
export const ContainerProfile = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;

.myUpDateProfile{
    display: flex;
    justify-content: center;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    width: 100%;
    height: 40px;
    font-size: 16px;
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
    /* gap: 0rem; */
    margin-left: 13px;
    .p1{
        margin-bottom: 5px;
    }
    .p2{
        margin: 6px 0px 6px 13px;
    }
    .p3{
        margin: 5px 0px 25px 13px;
    }
    p{
        /* padding-right: 25px; */
        margin: 12px;
        font-size: 16px;
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
        margin: 12px 0 0 25px;
        img{
            width: 34px;
            height: 34px;
        }        
    }
    h2{
        font-size: 16px;
        color: black;
        margin: 0px 0px 12px 25px;
    }
`

export const ContainerMapHistory = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    background-color: white;
    width: 100%;
    h3{
    font-size: 16px;
    border-bottom: 1px solid #000000;
    width: 328px;
    margin: 13px 0px 0px;
    }
`

export const ContainerHistory = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    width: 90%;
    height: 112px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    
    .p1History{
        font-weight: 600;
        font-size: 16px;
        color: #5cb646;
    }
    .p2History{
        font-weight: 600;
        font-size: 12px;
        color: black;
    }
    .p3History{
        font-weight: bold;
        font-size: 16px;
        color: black;
    }
    
`
// export const PageTittleContainer = styled.div`
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 64px;
//     box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
//     background-color: #FFF;
//     display: flex;
//     justify-content: center;
//     align-items: flex-end;
//     z-index: 1;
// `
// export const TittleNavContainer = styled.div`
//     width: 360px;
//     height: 44px;
//     font-size: 16px;
//     display: flex;
//     text-align: center;
//     align-items: center;
//     justify-content: center;
// `