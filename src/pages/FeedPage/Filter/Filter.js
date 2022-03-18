import React, { useContext, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContainerFilter } from "./style";



const Filter=()=> {
  
 const onclick=(ev)=>{

 }

  return (
    <ContainerFilter>
      <Swiper className="mySwiper">
         
        <SwiperSlide className="Slide 1">Hamburguer</SwiperSlide>
        <SwiperSlide className="Slide 2" class="swiper-button-next" onclick>Mexicano</SwiperSlide>
        <SwiperSlide className="Slide 4" class="swiper-button-next" onclick>Arabe</SwiperSlide>
        <SwiperSlide className="Slide 5" class="swiper-button-next" onclick>Sorvete</SwiperSlide>
        <SwiperSlide className="Slide 6" class="swiper-button-next" onclick>Comidas</SwiperSlide>
        <SwiperSlide className="Slide 7" class="swiper-button-next" onclick>Salgados</SwiperSlide>
        <SwiperSlide className="Slide 8" class="swiper-button-next" onclick>Hamburguer</SwiperSlide>

        {/* <SwiperSlide className="Slide 2">Arabe</SwiperSlide>
        <SwiperSlide className="Slide 3">Mexicano</SwiperSlide>
        <SwiperSlide className="Slide 4">Sorvete</SwiperSlide>
        <SwiperSlide className="Slide 5">Bebidas</SwiperSlide>
        <SwiperSlide className="Slide 6">Comidas</SwiperSlide>
        <SwiperSlide className="Slide 7">Salgados</SwiperSlide>
         */}
      </Swiper>
    </ContainerFilter>
  );
}
export default Filter;