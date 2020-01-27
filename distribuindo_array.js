const turmas = [
 [
    { nome: 'joão' },
    { nome: 'joão' },
    { nome: 'tiago' },
    { nome: 'joão' }
  ],
 [
    { nome: 'maria' },
    { nome: 'maria' },
    { nome: 'antônia' },
    { nome: 'luiza' },
    { nome: 'maria' }
  ],
 [
    { nome: 'francisca' },
    { nome: 'joana' },
    { nome: 'francisca' },
    { nome: 'luiza' },
    { nome: 'luiza' },
    { nome: 'jaqueline' }
  ],
  [
    { nome: 'karla' },
    { nome: 'joana' },
    { nome: 'francisca' },
    { nome: 'joaquina' },
    { nome: 'iara' },
    { nome: 'joana' }
  ]
];

let turmaTmp = [],
  myVar = [];

let ALFABETO = ['a', 'b', 'c', 'd', 'e', 'f'];

turmas.map((el, i) => {
  for (const aluno of turmas[i]) {
    turmaTmp.push(aluno.nome);
  }
  let id = i % Object.keys(turmas).length;
  myVar[('turma_' + ALFABETO[id]).toUpperCase()] = []; //Cria um array com três índices
});

turmaTmp.sort(); // Importante

turmaTmp.forEach((el, index) => {
  let id = index % Object.keys(turmas).length;
  myVar[('turma_' + ALFABETO[id]).toUpperCase()].push(el);
});

console.log(myVar);
