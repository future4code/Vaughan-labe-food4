
import styled from 'styled-components'
import Box from "@mui/material/Box"

export const ContainerFilter=styled.div`
.mySwiper{
    display: inline;
    gap: 20px;
    
}
.swiper {
  width: 20%;
  height: 100%;
 
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  
}
.Slide{
    display: inline;
     margin-right: 30px;
     color: black;
     &:active{
     color: #5CB646;
}
:focus{
  color: #5CB646;
/*aqui está a resolução aqui define a cor que o botão deve receber depois de clicar*/
}
    
}
.swiper-slide img {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;

}

`
