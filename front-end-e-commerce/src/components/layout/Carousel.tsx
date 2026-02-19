"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box } from "@mui/material";
import { Produto } from "@/types/interfaces";
import ProdutoCard from "@/features/produtos/components/ProdutoCard";

interface CarouselProps {
  slides: Produto[];
}

const goldGradient = "linear-gradient(135deg, #c8a96e 0%, #f0d090 100%)";

const CarouselSwipper: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 1,

        "& .swiper-button-next, & .swiper-button-prev": {
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(200,169,110,0.25)",
          color: "#c8a96e",
          backdropFilter: "blur(8px)",
          transition: "all 0.25s ease",
          padding: "6px",
          top: "38%",
          "&::after": {
            fontWeight: 900,
            fontSize: "10px",
            color: "#c8a96e",
          },
          "&:hover": {
            background: "rgba(200,169,110,0.12)",
            borderColor: "rgba(200,169,110,0.5)",
            transform: "scale(1.08)",
          },
        },

        "& .swiper-pagination": {
          bottom: "4px",
        },
        "& .swiper-pagination-bullet": {
          width: 6,
          height: 6,
          borderRadius: "3px",
          background: "rgba(200,169,110,0.3)",
          opacity: 1,
          fontSize: "11px !important",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          margin: "0 3px !important",
        },
        "& .swiper-pagination-bullet-active": {
          width: "20px",
          background: goldGradient,
          borderRadius: "3px",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1200: { slidesPerView: 3, spaceBetween: 16 },
          1536: { slidesPerView: 4, spaceBetween: 16 },
        }}
        style={{ paddingBottom: "48px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ display: "flex", height: "auto", padding: "10px 0" }}
          >
            <ProdutoCard produto={slide} key={slide.id}></ProdutoCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselSwipper;
