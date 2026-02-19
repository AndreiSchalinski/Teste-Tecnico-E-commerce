"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";

interface CarouselIMGProps {
  images: string[];
}

const CarouselImgs: React.FC<CarouselIMGProps> = ({ images }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "& .swiper-pagination": {
          bottom: "12px",
        },
        "& .swiper-pagination-bullet": {
          width: 6,
          height: 6,
          borderRadius: "3px",
          background: "rgba(255,255,255,0.55)",
          opacity: 1,
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          margin: "0 3px !important",
        },
        "& .swiper-pagination-bullet-active": {
          width: "20px",
          background: "white",
          borderRadius: "3px",
          boxShadow: "0 0 8px rgba(0,0,0,0.25)",
        },
      }}
    >
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={images.length > 1}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                bgcolor: "#f0f0ee",
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`Imagem ${i + 1}`}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x300/f0f0ee/aaa?text=Sem+imagem";
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselImgs;