/*
1 - Validar cadastro se peça possuir +100g
2 - Numero maximo de peças e de 10 unidades, caso +=10 alerta de capacidade maxima atingida
3 - Caso peça tenha menos de 3 caracteres no nome, deve alertar 'nume invalido'.
*/
var listaPecas = []

if(listaPecas.length < 10) { // Recebe peça e inclui na lista
   var nomePecas = ('Motor');
   listaPecas.push(nomePecas)
   console.log(listaPecas)

   } else {
      console.log('Numero maximo de itens atingido')

} if (nomePecas.length > 3) { //analisa tamanho do nome da peça
    console.log("Nome de peça está adequado para o cadastro.");

} else if(nomePecas.length == 0) {
    console.log("O nome da peça não pode ser vazio.");

} else {
    console.log("O nome da peça deve ter mais que três caracteres.");

}

let peso = 10;

if(peso < 100) { //analisa peso
   console.log('Peça precisa ter minimo 100g!')

   } else {
      console.log(listaPecas)

}
