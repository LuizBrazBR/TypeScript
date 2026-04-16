// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface Vendas {
  0: string;
  1: number;
  2: string;
  3: { marca: string; cor: string };
}

async function fetchData() {
  const raw = await fetch(' https://api.origamid.dev/json/vendas.json');
  const response: Vendas[] = await raw.json();
  totalVendas(response);
}

function totalVendas(json: Vendas[]) {
  const sumWithInitial = json.reduce(
    (accumulator, currentValue) => accumulator + currentValue[1],
    0
  );
  document.body.innerHTML = `
  <h1> Total Vendas </h1>
  <p>O total de vendas foi: ${sumWithInitial}</p>
  `;
}

fetchData();
