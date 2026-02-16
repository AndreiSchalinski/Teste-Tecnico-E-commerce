"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { PaginationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";

interface CarouselIMGProps {
  images: string[];
}

const CarouselIMG: React.FC<CarouselIMGProps> = ({ images }) => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <Swiper pagination={pagination}  modules={[Pagination]} className="mySwiper">
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt={`Slide ${i + 1}`} style={{ width: "100%", borderRadius: 0 }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselIMG;
