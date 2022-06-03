function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

//usando call
console.log(calculaIdade.call(pessoa2, 26));
console.log(calculaIdade.call(animal, 2));

//usando apply
console.log(calculaIdade.apply(pessoa2, [15]));
console.log(calculaIdade.apply(animal, [5]));