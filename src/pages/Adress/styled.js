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
    img{
        position: fixed;
        left: 25px;
        width: 24px;
        height: 24px;
    }
  }
  form {
    display: grid;
    gap: 1rem;
    width: 90vw;
    height: 60vh;
  }
`;
