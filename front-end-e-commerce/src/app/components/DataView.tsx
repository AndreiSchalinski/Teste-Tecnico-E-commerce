"use client";

import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
}

export default function CarrinhoDataView() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Smart Watch",
        image: "smartwatch.jpg",
        price: 199,
        quantity: 1,
        inventoryStatus: "INSTOCK",
      },
      {
        id: "2",
        name: "Black T-Shirt",
        image: "black-t-shirt.jpg",
        price: 49,
        quantity: 2,
        inventoryStatus: "INSTOCK",
      },
    ];

    setProducts(mockProducts);
  }, []);

  const increaseQuantity = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const itemTemplate = (product: Product, index: number) => {
    return (
      <div
        key={product.id}
        className={classNames(
          "flex align-items-center justify-content-between py-3 px-2",
          { "border-top-1 surface-border": index !== 0 }
        )}
      >
        <img
          src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
          alt={product.name}
          className="w-4rem h-4rem border-round object-cover"
        />

        <div className="flex flex-column flex-1 mx-3 gap-1">
          <span className="text-sm font-semibold text-900">
            {product.name}
          </span>

          <div className="flex align-items-center gap-2 mt-1">
            <Button
              icon="pi pi-minus"
              text
              rounded
              size="small"
              onClick={() => decreaseQuantity(product.id)}
              disabled={product.quantity === 1}
            />

            <span className="text-sm font-medium">
              {product.quantity}
            </span>

            <Button
              icon="pi pi-plus"
              text
              rounded
              size="small"
              onClick={() => increaseQuantity(product.id)}
            />
          </div>
        </div>

        <div className="flex flex-column align-items-end">
          <span className="text-sm font-bold">
            ${(product.price * product.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    );
  };

  const listTemplate = (items: Product[]) => {
    if (!items || items.length === 0) {
      return (
        <div className="text-center p-4 text-sm text-500">
          Carrinho vazio
        </div>
      );
    }

    return (
      <div className="flex flex-column">
        {items.map((product, index) =>
          itemTemplate(product, index)
        )}
      </div>
    );
  };

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="card p-2">
      <DataView value={products} listTemplate={listTemplate} />

      <div className="flex justify-content-between align-items-center mt-4 px-2 border-top-1 surface-border pt-3">
        <span className="font-semibold">Total:</span>
        <span className="font-bold text-lg">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
