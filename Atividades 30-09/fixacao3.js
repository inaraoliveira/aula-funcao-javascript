/* 1) Criar uma função para receber uma string como parâmetro:
a) Contar a quantidade de palavras repetidas em uma frase e retornar o total.
b) Chamar a função e exibir o resultado no console. */

function atv3_1 (texto){
  let contagem = 0;
  let separarPalavras = texto.split(' '); 
  
  for(i = 0; i < separarPalavras.length; i++){
    if(separarPalavras[i] == "tempo"){
      contagem++;
    }
  }
      return (contagem);
}

console.log(atv3_1("O tempo perguntou pro tempo quanto tempo o tempo tem. O tempo respondeu pro tempo que o tempo tem tanto tempo quanto tempo o tempo tem."))
  
  /* 2) Criar uma função que receba um array com 5 números como parâmetros:
  a) Inverter o array e retornar o resultado.
  b) Chamar a função e exibir o resultado no console. */
  
  function atv3_2(arr){
    let inverterArr = arr.reverse();
    return (inverterArr);
  }
  
    console.log(atv3_2([12,22,35,5,6]));
  
  /* 3) Criar uma função que receba 4 números inteiros positivos como parâmetros:
  a) Calcular a soma de todos os números.
  b) Retornar o Resultado.
  c) Chamar a função e exibir o resultado no console. */
  
  function atv3_3(num1, num2, num3, num4){
    let soma;
    
    if(Number.isInteger(num1, num2, num3, num4)){
      
      if(num1 > 0 && num2 > 0 && num3 > 0 && num4 > 0){
        soma = num1 + num2 + num3 + num4;
        return (soma);
      }
    }
  }
  
    console.log(atv3_3(2, 15, 8, 13));