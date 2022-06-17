import styled from "styled-components";


export const ContainerSplash = styled.div`
.splashScreen{
.splash{
display: grid;
align-items: center;
justify-items: center;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: #000;
z-index: 300;
}
@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.fade-in{
    opacity: 0;
    animation: fadeIn 1.3s ease-in forwards;
}
}
`