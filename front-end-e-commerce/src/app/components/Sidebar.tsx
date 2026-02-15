import { Sidebar } from "primereact/sidebar";
import CarrinhoDataView from "./DataView";

export default function SidebarCarrinho({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}) {
  return (
    <Sidebar
      visible={showSidebar}
      position="right"
      onHide={() => setShowSidebar(false)}
      style={{ width: "30rem" }}
    >
      <h2>Carinho de compras</h2>

      <p>Todos os produtos adicionados</p>

      <CarrinhoDataView />
    </Sidebar>
  );
}
