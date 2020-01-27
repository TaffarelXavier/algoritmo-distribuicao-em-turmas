/**
 * Em uma grande escola, o diretor pediu ao departamento de TI
 * para que ele criasse um programa que, dada algumas turmas,
 * o algoritmo separesse os alunos e os distribuísse de forma que
 * as turmas tivessem alunos os mais separados possíveis,
 * isto é, se fosse dada três turmas, e na turma 'A' tivesse três Joãos,
 * então, cada João ficaria separado em turmas diferentes.
 */

//Entrada das turmas:
const turmas = {
  turma_a: [
    { nome: 'joão' },
    { nome: 'joão' },
    { nome: 'tiago' },
    { nome: 'joão' }
  ],
  turma_b: [
    { nome: 'maria' },
    { nome: 'maria' },
    { nome: 'antônia' },
    { nome: 'luiza' },
    { nome: 'maria' }
  ],
  turma_c: [
    { nome: 'francisca' },
    { nome: 'joana' },
    { nome: 'francisca' },
    { nome: 'luiza' },
    { nome: 'luiza' },
    { nome: 'jaqueline' }
  ],
  turma_d: [
    { nome: 'karla' },
    { nome: 'joana' },
    { nome: 'francisca' },
    { nome: 'joaquina' },
    { nome: 'iara' },
    { nome: 'marlene' }
  ]
};

let turmaTmp = [],
  turmasDistribuidasCorretamente = [];

const ALFABETO = ['a', 'b', 'c', 'd', 'e', 'f'];

//A primeira coisa a se fazer é unir todos os alunos numa turma temporária
Object.values(turmas).map((el, i) => {
  for (const aluno of el) {
    turmaTmp.push(aluno.nome);
  }

  let indice = i % Object.keys(turmas).length;

  //Cria um array com a quantidade de índices do array 'turmas'
  
  turmasDistribuidasCorretamente['turma_' + ALFABETO[indice]] = []; 
});

//Aqui, ordena-se o array
turmaTmp.sort();

turmaTmp.forEach((el, index) => {
  let id = index % Object.keys(turmas).length;
  turmasDistribuidasCorretamente['turma_' + ALFABETO[id]].push(el);
});

console.log(turmasDistribuidasCorretamente);
