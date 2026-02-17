"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CarouselImgs from "./CarouselImg";
import { useCarrinho } from "@/context/carrinho.context";

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
  images?: string[];
}

interface CarouselProps {
  slides: Product[];
}

const CarouselSwipper: React.FC<CarouselProps> = ({ slides }) => {
  const { adicionarProduto } = useCarrinho();
  const router = useRouter();

  const handleAddProduto = (product: Product) => {
    adicionarProduto({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images?.[0] || "",
    });
  };

  const handleNavegacao = (product: Product) => {
    const slugMap: Record<string, string> = {
      clothes: "roupas",
      electronics: "eletronicos",
      furniture: "mobilia",
      shoes: "calcados",
      miscellaneous: "variados",
    };
    const categoriaTraduzida = slugMap[product.category.slug];
    if (categoriaTraduzida) {
      router.push(`/produtos/${categoriaTraduzida}/${product.id}`);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 4,
        px: { xs: 2, md: 4 },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "primary.main",
          transform: "scale(0.7)",
          bgcolor: "rgba(255, 255, 255, 0.8)",
          width: 50,
          height: 50,
          borderRadius: "50%",
          boxShadow: 2,
          "&:hover": { bgcolor: "#fff" },
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: "50px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ display: "flex", height: "auto" }}
          >
            <Card
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{ position: "relative", height: 250, overflow: "hidden" }}
              >
                <CarouselImgs images={slide.images || []} />
                <Chip
                  label={slide.category.name}
                  size="small"
                  color="primary"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 10,
                    fontWeight: "bold",
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    minHeight: "3em",
                  }}
                >
                  {slide.description}
                </Typography>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{ fontWeight: 800 }}
                  >
                    ${slide.price}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      onClick={() => handleNavegacao(slide)}
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                      }}
                      startIcon={
                        <VisibilityIcon sx={{ fontSize: "1rem !important" }} />
                      }
                    >
                      Detalhes
                    </Button>

                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      onClick={() => handleAddProduto(slide)}
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "0.75rem",
                        background:
                          "linear-gradient(45deg, #000000 30%, #434343 90%)",
                        color: "white",
                        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                        transition: "0.3s",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #2c3e50 30%, #000000 90%)",
                        },
                      }}
                      startIcon={<AddShoppingCartIcon fontSize="small" />}
                    >
                      Add
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselSwipper;
