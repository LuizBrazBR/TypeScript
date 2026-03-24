"use strict";
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
// Interface → define forma de 1 item
// [] → transforma em array daquele tipo
function mostrarCursos(cursos) {
    cursos.map((curso) => {
        document.body.innerHTML += `
    <h1 style="color: ${curso.nivel === 'iniciante' ? 'blue' : 'red'};">${curso.nome}</h1>
    <p>Horas: ${curso.horas}h</p>
    <p>Quantidade de aulas: ${curso.aulas}</p>
    <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
    <p>${curso.tags.join(', ')}</p>
    <p>${curso.idAulas.join(', ')}</p>
    <p >Nível: ${curso.nivel}</p>

  `;
    });
}
