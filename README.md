# Algoritmo-distribuicao-em-turmas

## Problema:

 ### ___Em uma grande escola, o diretor pediu ao departamento de TI para que ele criasse um programa que, dada algumas turmas, o algoritmo separesse os alunos e os distribuísse de forma que as turmas tivessem alunos os mais separados possíveis, isto é, se fosse dada três turmas, e na turma 'A' tivesse três Joãos, então, cada João ficaria separado em turmas diferentes.___
 ----

## A resolução está feita nesses dois arquivos, sendo que cada um à sua maneira, ou seja, é feita a mesma coisa de forma diferente.

 > O arquivo `distribuindo_array.js` usa array na entrada.

 > O arquivo `index.js` usa array de objetos na entrada.

 ## Dada 4 turmas:

```
CLASSE A:
        João Eduardo,
        João Carlos,
        Tiago André Moreira,
        João Emanuel,
CLASSE B:
        Maria Clara,
        Maria Antônia,
        Antônia Josefa da Silva,
        Luiza da Silva,
        Maria Emanuela de Sousa 
CLASSE C:
        Francisca da Silva de Sousa,
        Eduarda Oliveira Ferreirana,
        Isabela Azevedo Rodrigues,
        Luiza Andrande de Sousa,
        Jaqueline da Silva e Silva,
        Luiza de Melo 
CLASSE D:
        Karla Magna,
        Joana de Sousa,
        Francisca da Silva,
        Fabiana Albuquerque Xavier,
        Iara Amorim,
        Joana Brito de Melo 
```
## A saída seria algo como:

``` java
TURMA_A: [
    'Antônia Josefa da Silva',
    'Francisca da Silva de Sousa',
    'Joana Brito de Melo',
    'João Emanuel',
    'Luiza de Melo',
    'Tiago André Moreira'
    ],
TURMA_B: [
    'Eduarda Oliveira Ferreirana',
    'Iara Amorim',
    'Joana de Sousa',
    'Karla Magna',
    'Maria Antônia'
    ],
TURMA_C: [
    'Fabiana Albuquerque Xavier',
    'Isabela Azevedo Rodrigues',
    'João Carlos',
    'Luiza Andrande de Sousa',
    'Maria Clara'
    ],
TURMA_D: [
    'Francisca da Silva',
    'Jaqueline da Silva e Silva',
    'João Eduardo',
    'Luiza da Silva',
    'Maria Emanuela de Sousa'
    ]