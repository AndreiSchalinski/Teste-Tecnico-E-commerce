async function getTodosProdutos() {
  return [];
}

export default async function TodosProdutosPage() {
  const listProdutos = await getTodosProdutos();

  return (
    <>
      <h1>Todos os produtos</h1>

      <ul>
        {listProdutos.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}
