// Utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem vindo!");
// variável chamada "nome" e atribua a ela o nome digitado no prompt.
let nome = prompt("Digite seu nome") 
// utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
console.log(`Olá, ${nome}`);
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`);
// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagem);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 10;
let valor4 = 5;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}`);
// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Qual é a sua idade?");
if (idade > 18) {
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
}
// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numeroDigitado = prompt("Digite um número de 1 a 10");

    if (numeroDigitado > 0) {
        console.log("O número é positivo")
    } if (numeroDigitado < 0){
        console.log("O número é negativo")
    } if (numeroDigitado == 0) {
        console.log("O número é igual a zero")
    }
    // Use um loop while para imprimir os números de 1 a 10 no console.
    let contador = 1;
    while (contador <= 10){
        console.log(contador);
        contador++
    }
    // Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
    let nota = prompt("Digite a nota");
    if (nota >= 7) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
    // Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
    let numeroRandom = Math.random();
    console.log(numeroRandom);
    // Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
    let numeroRandom2 = parseInt(Math.random() * 10 + 1);
    console.log(numeroRandom2);
    // Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
    let numeroRandom3 = parseInt(Math.random() * 1000 + 1);
    console.log(numeroRandom3);