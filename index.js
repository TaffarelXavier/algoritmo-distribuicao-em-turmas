//Entrada das turmas:
const turmas = {
    turma_a: [{ nome: 'joão' }, { nome: 'joão' }, { nome: 'tiago' }, { nome: 'joão' }],
    turma_b: [{ nome: 'maria' }, { nome: 'maria' }, { nome: 'antônia' }, { nome: 'luiza' }, { nome: 'maria' }],
    turma_c: [{ nome: 'francisca' }, { nome: 'joana' }, { nome: 'francisca' }, { nome: 'luiza' }, { nome: 'luiza' }, { nome: 'jaqueline' }],
    turma_d: [{ nome: 'karla' }, { nome: 'joana' }, { nome: 'francisca' }, { nome: 'joaquina' }, { nome: 'iara' }, { nome: 'marlene' }]
};

let turmaTmp = [],
    turmasDistribuidasCorretamente = [],
    alf = [];

let quantidadeDeTurmas = Object.keys(turmas).length;

//A primeira coisa a se fazer é unir todos os alunos numa turma temporária
Object.values(turmas).map((el, i) => {
    for (const aluno of el) {
        turmaTmp.push(aluno.nome);
    }

    let indice = i % quantidadeDeTurmas;

    //Cria um array com a quantidade de índices do array 'turmas'
    turmasDistribuidasCorretamente[Object.keys(turmas)[indice]] = [];
});

//Aqui, ordena-se o array
turmaTmp.sort();

//Aqui, preenche o array 'turmasDistribuidasCorretamente'
turmaTmp.forEach((el, i) => {
    let indice = i % quantidadeDeTurmas;
    turmasDistribuidasCorretamente[Object.keys(turmas)[indice]].push(el);
});

console.log(turmasDistribuidasCorretamente);
