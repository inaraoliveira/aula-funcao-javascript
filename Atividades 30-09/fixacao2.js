/* 1) Criar uma função para receber dois parâmetros: numero e percentual.
a) Calcular a porcentagem de um número  usando a fórmula: (numero/100) * percentual
b) Chamar a função e exibir o resultado no console. */

function atv2_1(numero, percentual){
  
    let calcularPorcentagem = (numero/100) * percentual;
    return (calcularPorcentagem);
  }
  
    console.log(atv2_1(250, 10));
  
  /* 2) Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
  a) Converter o array para string e retornar o resultado.
  b) Chamar a função e exibir o resultado no console. */
  
  var arrStrin = (arr1, arr2) => {
    let juntarArr = arr1.concat(arr2);
    let converterArr = juntarArr.toString();
    
    return (converterArr);
  }
  
    console.log(arrStrin([2,15,22], [12,5,72]));