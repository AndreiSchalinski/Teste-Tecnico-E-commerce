# [PRAZO DE ENTREGA - 7 DIAS CORRIDOS]

## 🛒 E-commerce SSR

Queremos avaliar sua compreensão de **renderização no lado do servidor (SSR)**, manejo básico de estado no front-end e boas práticas gerais.

Não se espera uma aplicação completa de produção, mas sim uma solução simples, clara e funcional.

---

🎯 Objetivo do desafio

Construir uma loja virtual simples com pelo menos três páginas:

🏠 Homepage

Listagem de produtos em destaque

📦 Detalhe do produto

Informações básicas do produto selecionado

🛒 Carrinho

Lista de produtos adicionados e suas quantidades

Os dados devem ser obtidos da API pública:
🔗 https://fakeapi.platzi.com/en

---

## 🛠️ Ferramentas obrigatórias

- Framework React com suporte a SSR
  - Next.js ou React Router Framework + Vite
- TypeScript

---

## ✅ Requisitos obrigatórios

### Renderização

- O conteúdo principal de cada página deve ser renderizado no servidor (SSR).
- ❌ Não utilizar `useEffect` para o fetch principal de dados.

---

### 🧭 Navegação e feedback

- Mostrar feedback visual em ações importantes:
    - Navegação entre páginas.
    - Adicionar ou remover produtos do carrinho.
- Exemplo: loading, estado desabilitado, mensagem simples.

---

### 🔍 SEO básico

- Incluir metadados gerados no servidor:
    - `<title>`
    - `<meta description>`
- Na página de detalhe, os metadados devem mudar de acordo com o produto.

---

### 📱 Responsividade

- A aplicação deve funcionar corretamente em desktop e mobile.

---

### 🧱 Código

- Código claro e bem organizado.
- Componentes simples.
- Nomes descritivos.

---

## ⭐ Requisitos opcionais (pontos extras)

- Implementar **Optimistic UI** ao adicionar produtos ao carrinho.
- Fazer deploy da aplicação (Vercel, Netlify, etc.).
- Incluir **Schema.org `Product`** na página de detalhe do produto.
- Reduzir ao máximo o **CLS (Layout Shifts)**.
- Evitar o uso de APIs experimentais sem fallback.
- Uso básico de atributos **ARIA** quando aplicável (ex: botões, inputs).

---

## 📊 O que será avaliado

- Compreensão de SSR vs CSR.
- Uso correto do stack.
- Clareza do código.
- Manejo básico de estado.
- Uso correto das tags HTML.
- Capacidade de explicar decisões técnicas.
- Uso correto de CSS para layout básico (box model, flex ou grid).

---

## 📤 Entrega

- Repositório público no GitHub.
- `README.md` contendo:
    - Como rodar o projeto.
    - Breve explicação da solução.
    - O que você melhoraria com mais tempo.

## 📦 Requisitos de desenvolvimento

- ✅ Código sem warnings ou erros
- 📦 Uso de lib de gerenciamento de estado (Context API, Redux ou equivalente)
- 🎨 Uso de lib front-end (opcional, se desejar)
- 🔁 Versionamento com Git/GitHub
- 🧾 Conventional Commits para mensagens de commit

### ⚙️ Funcionamento da aplicação

- A aplicação consiste em três fluxos principais:
- A homepage carrega os produtos via SSR e apresenta a listagem
- Ao clicar em um produto, o usuário é direcionado para a página de detalhe, também renderizada no servidor, com SEO dinâmico
- O carrinho mantém os produtos selecionados em estado global, permitindo adicionar, remover e alterar quantidades com feedback visual
O fetch principal de dados ocorre sempre no servidor para garantir SSR real.
  
[Adicione aqui uma descrição do funcionamento da aplicação, explicando como as funcionalidades são implementadas e como o usuário pode interagir com elas.]

## 👤 Autor

Nome: [Seu nome]
GitHub: [link do GitHub]
LinkedIn: [link do LinkedIn]
