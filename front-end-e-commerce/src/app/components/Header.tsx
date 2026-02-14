"use client";

import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

export default function Header() {
  const itemRenderer = (item: any) => (
    <a className="flex align-items-center p-menuitem-link" href={item.url}>
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url:"/",
    },
    {
      label: "Store",
      icon: "pi pi-star",
      items: [
        {
          label: "Todos as categorias",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          url:"/produtos",
          template: itemRenderer,
        },
        {
          label: "Roupas",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          url:"/produtos/roupas",
          template: itemRenderer,
        },
        {
          label: "Eletrônicos",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          url:"/produtos/eletronicos",
          template: itemRenderer,
        },
        {
          label: "Mobília",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          url:"/produtos/mobilia",
          template: itemRenderer,
        },
        {
          label: "Variados",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          url:"/produtos/variados",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Carrinho",
      icon: "pi pi-search",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      {/* <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" /> */}
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
