//Antigo, mas funciona também
const turmas = [
  [{ nome: 'João Eduardo' }, { nome: 'João Carlos' }, { nome: 'Tiago André Moreira' }, { nome: 'João Emanuel' }],
  [
    { nome: 'Maria Clara' },
    { nome: 'Maria Antônia' },
    { nome: 'Antônia Josefa da Silva' },
    { nome: 'Luiza da Silva' },
    { nome: 'Maria Emanuela de Sousa' }
  ],
  [
    { nome: 'Francisca da Silva de Sousa' },
    { nome: 'Eduarda Oliveira Ferreirana' },
    { nome: 'Isabela Azevedo Rodrigues' },
    { nome: 'Luiza Andrande de Sousa' },
    { nome: 'Jaqueline da Silva e Silva' },
    { nome: 'Luiza de Melo' }
  ],
  [
    { nome: 'Karla Magna' },
    { nome: 'Joana de Sousa' },
    { nome: 'Francisca da Silva' },
    { nome: 'Fabiana Albuquerque Xavier' },
    { nome: 'Iara Amorim' },
    { nome: 'Joana Brito de Melo' }
  ]
];

let turmaTmp = [],
  myVar = [];

const ALFABETO = 'abcdefghijklmnopqrstuvwxyz';

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


/*

 let ALFABETO = [...'abcdefghijklmnopqrstuvwxyz'];
//Math.ceil(quantidadeDeTurmas / 26); 26 é a quantidade de letras do alfabeto
for (let i = 1; i < Math.ceil(quantidadeDeTurmas / 26) + 1; i++) {
    alf.push(ALFABETO.map(el => el + `_${i}`));
}

ALFABETO = []; //Zera o array acima.

Object.values(alf).map(arrLetter => {
    arrLetter.forEach(letter => {
        ALFABETO.push(letter);
    });
});*/