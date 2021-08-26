const fs = require("fs");
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function (erro, conteudo){
        if (erro){
            console.log(`Deu erro: ${erro}`);
        } else{
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
abrirArquivo("arquivo.txt");

// function demorada(tempo){
//     console.log(`demorada ${tempo}`);
//     const atualMaisTempo = new Date().getTime() + tempo;
//     while(new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// }
// setTimeout(function(){demorada(2000)}, 2000);
// setTimeout(function(){demorada(1000)}, 1000);
// console.log("chegou ao fim do script principal");

// setTimeout(function(){
//     console.log('dentro da timeout', 0)
// })
// const a = new Date().getTime() + 1000
// while (new Date().getTime() <= a);
// console.log('fora da timeout')

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime <= atualMais2Segundos);
//     const d = 8+4
//     return d
// }
// const a = 2+3
// const b = 5+9

// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)

// const e = 2 + a + b
// console.log(e)

// let calculadora = {
//     //arrow function
//     soma: (a, b) => a + b,
//     //função comum
//     subtracao: function(a, b){
//         return a - b;
//     },
// };

// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);

// let concessionaria = {
//     cnpj: "00011122233344401-45",
//     endereco: {
//         logradouro: "Rua A",
//         numero: 10,
//         bairro: "Vila J",
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ecosport",
//             anoDeFabricacao: 2018,
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2020,
//         },
//         {
//             marca: "Volkswagen",
//             modelo:"Nivus",
//             anoDeFabricacao: 2020,
//         },
//     ],
// };
// for (let veiculo of concessionaria.veiculos){
//     console.log(`Marca: ${veiculo.marca}`);
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);
// }

// let pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121,
//     },
// };

// console.log(
//     `Sou ${pessoaComEndereco.nome},
//     tenho ${pessoaComEndereco.idade} anos
//     e moro na ${pessoaComEndereco.endereco["logradouro"]}
//     número ${pessoaComEndereco["endereco"]["numero"]}`
// );

// let pessoa = {
//     nome: "João",
//     idade: 17,
// }

// console.log("Me chamo " + pessoa.nome);

// console.log("Tenho " + pessoa["idade"] + " anos");

// function saudacoesFactory(saudacao, nome){
//     return function (){
//         console.log (saudacao + ', ' + nome);
//     }
// }
// let olaJoao = saudacoesFactory ('Olá', 'João');
// let tchauJoao = saudacoesFactory('Tchau', 'João');
// olaJoao();
// tchauJoao();

// const triplo = function (n = 5){
//     return n * 3
// }

// console.log(triplo(8))
// console.log(triplo())

//const triplo = function (n){
    //if(n !== undefined){
      //  return 3 * n
    //}
   // return 3 * 5
//}

//const triplo = (valor) => {
    //console.log("Triplo de " + valor)
    //return 3 * valor
//}

//console.log(triplo(5))

//const hello = () => console.log("Hello!!!")
//hello()

//arrow function
//const dobro = n => n * 2

//console.log(dobro(2))

//function dobro (n){
    //return n*2
//}

//function eAgora (f1, f2){
    //return f1() * f2()
//}

//console.log(eAgora(function (){return 2 +3}, function(){return 2 * 3}))

//function soma(a, b){
   // return a + b
//}

//const resultado = soma (2, 3)
//console.log(resultado)

//function hello(){
    //console.log("Hello")
//}
//hello()

//function hello(nome){
    //console.log(`Hello, $(nome)`)
    //console.log("Hello, " + nome)
//}

//hello("José")

//var idade = 18
//console.log ("Oii " + nome)
//if (idade >= 18){
 //   var nome = "João"
 //   console.log ("Parabens " + nome + ". Você pode dirigir")
//}

//console.log ("Até mais, " + nome)

//var linguagem = "Javascript"
//console.log ("Aprendendo " + linguagem)
//variavel pode ser redeclarada (faz 2 variaveis com o mesmo nome)
//var linguagem = "Java"
//console.log ("Aprendendo " + linguagem)

//declarando variaveis
//let a = 2
//let b = "abcd"
//a = 3

//declarando constantes
//const nome = "José"
//const idade = 27
//const endereco = 'Rua K, 12'

//const n1 = 2
//const n2 = '3'
//coerção implícita de de n1, concatenação acontece
//const n3 = n1 + n2
//console.log(n3)
//coerção explicita, soma acontece
//const n4 = n1 + Number (n2)
//console.log(n4)