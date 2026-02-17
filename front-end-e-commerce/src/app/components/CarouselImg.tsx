"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface CarouselIMGProps {
  images: string[];
}

const CarouselImgs: React.FC<CarouselIMGProps> = ({ images }) => {
  return (
    <Box sx={{ 
      width: "100%", 
      height: "100%", 
      position: "relative",
      "& .swiper-pagination-bullet": {
        backgroundColor: "#fff",
        opacity: 0.7,
      },
      "& .swiper-pagination-bullet-active": {
        backgroundColor: "primary.main",
        opacity: 1,
      }
    }}>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }} 
        className="mySwiper"
        style={{ width: "100%", height: "250px" }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", 
                borderRadius: 0,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

import { Box } from "@mui/material";

export default CarouselImgs;