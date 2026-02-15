import { useState } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";
import CarouselImage from "../../components/CarouselImage";
import { useCarrinho } from "../../../context/carrinho.context";

// interface Product {
//   id: string;
//   code: string;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
//   category: string;
//   quantity: number;
//   inventoryStatus: string;
//   rating: number;
// }

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  images: any[];
  inventoryStatus: string;
}

export default function ProdCarousel({ produtos }: any) {
  const { adicionarProduto } = useCarrinho();

  const [products] = useState<Product[]>(produtos);

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const handleAddProduto = (product: Product) => {
    adicionarProduto({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
  };

  const productTemplate = (product: Product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          {/* <img
            src={product.image}
            alt={product.title}
            className="w-6 shadow-2"
          /> */}
          <CarouselImage imagens={product.images}></CarouselImage>
        </div>
        <div>
          <h4 className="mb-1">{product.title}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            {/* <Button icon="pi pi-search" className="p-button p-button-rounded" /> */}
            <Button
              icon="pi pi-cart-plus"
              label="Comprar"
              onClick={() => handleAddProduto(product)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
