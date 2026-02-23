//Atividade - Condicionais em JavaScript

console.log("𝐀𝐭𝐢𝐯𝐢𝐝𝐚𝐝𝐞 – 𝐂𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐚𝐢𝐬 𝐞𝐦 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭")
console.log("")


console.log("Ex.1")

valor = 12

if(valor >= 0){
    console.log("Esse número é positivo!")
} else{
    console.log("Esse número é negativo")
}


console.log("")
console.log("Ex.2")
let idade = 12;
if(idade >= 18){
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade")
}

console.log("")
console.log("Ex.3")
let par_ou_impar = 2;

if(par_ou_impar % 2 == 0){
    console.log("Esse valor é par")
} else {
    console.log("Esse valor é ímpar")
}

console.log("")
console.log("Ex.4")
let nota = 7;
if(nota >= 6){
    console.log("Você está Aprovado")
} else {
    console.log("Você está Reprovado")
}


console.log("")
console.log("Ex.5")
let votar = 20;
if(votar >= 16){
    console.log("Você pode votar ")
} else {
    console.log("Você não pode votar")
}

console.log("")
console.log("Ex.6")
let senha = 1234;
if(senha = 1234){
    console.log("Acesso Liberado ✅ ")
} else {
    console.log("Acesso Negado ❌")
}

console.log("")
console.log("Ex.7")
let temperatura = 26;
if(temperatura >= 25){
    console.log("Está Quente ☀️ ")
} else {
    console.log("Está Frio ❄️")
}

console.log("")
console.log("Ex.8")
let altura = 1.65;
if(altura >= 1.40){
    console.log("Você tem altura suficiente para ir no brinquedo 😁")
} else {
    console.log("Você não tem altura suficiente para ir no brinquedo 😢")
}

console.log("")
console.log("Ex.9")

verificar_valor = 0

if(verificar_valor > 0){
    console.log("Esse número é positivo!")
}else if (verificar_valor == 0) {
    console.log("Esse número é 0")
}
else{
    console.log("Esse número é negativo")
}

console.log("")
console.log("Ex.10")

nota_aluno = 10

if(nota_aluno >= 9){
    console.log("Sua Nota é Excelente, PARABÉNS 🤩")
}else if (nota_aluno == 7 || 8) {
    console.log("Sua Nota é Boa 😊")
} else if (nota_aluno == 6) {
    console.log("Sua Nota é Regular 😐")
}else{
        console.log("Sua Nota é Ruim, Você reprovou 😢")

}

console.log("")
console.log("Ex.11")

let dirigir = 20
let CNH = true

if(dirigir >= 18 && CNH == true){
            console.log("Você é maior de idade, e pode dirgir 🚗")
} else if (dirigir >= 18 && CNH == false){
    console.log("Você poderia dirgir, porém você não tem CNH 😢")
} else{
    console.log("Você é menor de idade, não pode dirigir ❌")
}

console.log("")
console.log("Ex.12")

let preço = 120

if(preço >=  100){
    console.log("Você ganhou um Desconto 😍")
}else{
    console.log("Você não ganhou Desconto 😑")
}

console.log("")
console.log("Ex.13")

let usuario ="admin"
let senhaa ="123"

if(usuario == "admin" && senhaa == "123"){
    console.log("Login Realizado!")
}else{
    console.log("Erro no login")
}

console.log("")
console.log("Ex.14")

let classificacao = 17

if(classificacao >= 16){
    console.log("Você pode assistir esse filme 😊")
}else{
    console.log("Você não pode assistir esse filme 😶")
}

console.log("")
console.log("Ex.15")

let semaforo = "verde"

if(semaforo == "verde"){
    console.log("Pode passar 🟢")
}else if(semaforo == "amarelo"){
    console.log("Atenção 🟡")
} else{
    console.log("Pare 🔴")
}



