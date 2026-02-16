"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CarouselIMG from "./CarouselImg";

export interface Categoria {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Categoria;
  image?: string;
  images?: any[];
  inventoryStatus?: string;
}

interface CarouselProps {
  slides: Product[];
}

const CarouselSwipper: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} style={{ display: "flex" }}>
          <Card sx={{ flex: 1, margin: "auto", minHeight: 450 }}>
            <CarouselIMG images={slide.images || []} key={slide.id} />
            <CardContent>
              <Typography variant="h6">{slide.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {slide.description}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSwipper;
