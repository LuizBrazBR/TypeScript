// {
//   "nome": "Notebook",
//   "preco": 2000,
//   "descricao": "Novo notebook com 128gb de memória ram.",
//   "garantia": "3",
//   "seguroAcidentes": true,
//   "empresaFabricante": {
//     "nome": "Ranek",
//     "fundacao": 1850,
//     "pais": "Dinamarca"
//   },
//   "empresaMontadora": {
//     "nome": "Handel",
//     "fundacao": 2000,
//     "pais": "Polônia"
//   }
// }

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.descricao}</p>
    </div>
  `;
}
