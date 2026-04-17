// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface VendasCarac {
  marca: string;
  cor: string;
}

type Vendas = [string, number, string, VendasCarac];

async function fetchData() {
  const raw = await fetch(' https://api.origamid.dev/json/vendas.json');
  const response: Vendas[] = await raw.json();
  totalVendas(response);
}

function totalVendas(json: Vendas[]) {
  const [, valor] = json;
  console.log('Oi', valor);
  const sumWithInitial = json.reduce((accumulator, currentValue) => {
    (accumulator + currentValue[1], 0);
  });
  document.body.innerHTML = `
  <h1> Total Vendas </h1>
  <p>O total de vendas foi: ${sumWithInitial}</p>
  `;
}

fetchData();
