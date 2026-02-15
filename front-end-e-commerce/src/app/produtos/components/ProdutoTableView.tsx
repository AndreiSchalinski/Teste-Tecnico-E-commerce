"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";
import { useCarrinho } from "../../../context/carrinho.context";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface Produto {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export default function ProdutosTableView({ produtos }: any) {
  const { adicionarProduto } = useCarrinho();

  const [products] = useState<Produto[]>(produtos);

  const handleAddProduto = (product: Produto) => {
    adicionarProduto({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
  };

  const itemTemplate = (product: Produto, index: number) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 },
          )}
        >
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block mx-auto border-round"
            src={product.images[0]}
            alt={product.title}
          />

          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.title} - {product.id}</div>

              <div className="text-600 text-sm">{product.description}</div>

              <div className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{product.category.name}</span>
              </div>
            </div>

            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>

              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                onClick={() => handleAddProduto(product)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items: Produto[]) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="grid grid-nogutter">
        {items.map((product, index) => itemTemplate(product, index))}
      </div>
    );
  };

  return (
    <div className="card">
      <DataView
        value={products}
        listTemplate={listTemplate}
        paginator
        rows={3}
      />
    </div>
  );
}
