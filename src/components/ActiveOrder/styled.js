import styled from "styled-components";

export const ContainerOrder = styled.div`
display: grid;
grid-template-columns: 100px 1fr;
justify-items: start;
align-items: center;

background-color: #5CB646;

width: 100%;
height: 17vh;
position: fixed;
bottom: 50px;
.icon{
  margin-left: 30px;
}
h3{
    color: #fff;
    margin: 5px;
}
h4{
    margin: 5px;
}
`