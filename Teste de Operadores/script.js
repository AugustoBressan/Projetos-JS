function testeOperador(n1, n2) {
    if (!n1 || !n2) return `Digite dois números!`
   const primeiraFrase = criarPrimeiraFrase(n1, n2);
   const segundaFrase = criarSegundaFrase(n1, n2);    

   return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeiraFrase(n1, n2) {
    let saoiguais = '';
    if(n1 !== n2){
        saoiguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${saoiguais} são iguais.`
}

function criarSegundaFrase(n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(testeOperador(-2, 25))