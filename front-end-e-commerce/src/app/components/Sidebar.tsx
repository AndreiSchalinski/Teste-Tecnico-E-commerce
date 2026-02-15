import { Sidebar } from "primereact/sidebar";

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
    >
      <h2>Right Sidebar</h2>
      <p>Conteúdo do carrinho...</p>
    </Sidebar>
  );
}
