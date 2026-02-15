"use client";

import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";
import { useCarrinho } from "../../context/carrinho.context";

export default function CarrinhoDataView() {
  const {
    produtos,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
    total,
  } = useCarrinho();

  const itemTemplate = (product: any, index: number) => {
    return (
      <div
        key={product.id}
        className={classNames(
          "flex align-items-center justify-content-between py-3 px-2",
          { "border-top-1 surface-border": index !== 0 }
        )}
      >
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-4rem h-4rem border-round object-cover"
          />
        )}

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
              onClick={() => diminuirQuantidade(product.id)}
            />

            <span className="text-sm font-medium">
              {product.quantity}
            </span>

            <Button
              icon="pi pi-plus"
              text
              rounded
              size="small"
              onClick={() => aumentarQuantidade(product.id)}
            />
          </div>
        </div>

        <div className="flex flex-column align-items-end gap-2">
          <span className="text-sm font-bold">
            ${(product.price * product.quantity).toFixed(2)}
          </span>

          <Button
            icon="pi pi-trash"
            severity="danger"
            text
            size="small"
            onClick={() => removerProduto(product.id)}
          />
        </div>
      </div>
    );
  };

  const listTemplate = (items: any[]) => {
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

  return (
    <div className="card p-2">
      <DataView value={produtos} listTemplate={listTemplate} />

      <div className="flex justify-content-between align-items-center mt-4 px-2 border-top-1 surface-border pt-3">
        <span className="font-semibold">Total:</span>
        <span className="font-bold text-lg">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
