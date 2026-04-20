// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface VendaCarac {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, VendaCarac];

async function fetchData() {
  const raw = await fetch(' https://api.origamid.dev/json/vendas.json');
  const response: Venda[] = await raw.json();
  totalVendas(response);
}

function totalVendas(vendas: Venda[]) {
  const total = vendas.reduce((acc, [, preco]) => acc + preco, 0);
  document.body.innerHTML = `
  <h1> Total Vendas </h1>
  <p>O total de vendas foi: ${total}</p>
  `;
}

fetchData();
