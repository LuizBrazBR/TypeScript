// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
  // "nome": "HTML e CSS",
  //   "horas": 40,
  //   "aulas": 200,
  //   "gratuito": false,
  //   "tags": ["HTML", "CSS", "JavaScript", "Browser"],
  //   "idAulas": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  //   "nivel": "iniciante"



interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
  
}

fetchCursos();

// Interface → define forma de 1 item
// [] → transforma em array daquele tipo
function mostrarCursos(cursos: Curso[]) {

  cursos.map((curso) =>{
  document.body.innerHTML += `
    <h1 style="color: ${curso.nivel === 'iniciante' ? 'blue' : 'red' };">${curso.nome}</h1>
    <p>Horas: ${curso.horas}h</p>
    <p>Quantidade de aulas: ${curso.aulas}</p>
    <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
    <p>${curso.tags.join(', ')}</p>
    <p>${curso.idAulas.join(', ')}</p>
    <p >Nível: ${curso.nivel}</p>

  `
  }
)

}
