/* 1) Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
a) Ordenar os elementos do array na ordem invertida */

let estadosDoNorte = function(){
    let estados = ["Amazônia", "Rondônia", "Tocantins"];
    
    estados.reverse();
    return (estados);
  }
    console.log(estadosDoNorte());
  
  /* 2) Criar uma função que recebe duas strings:
  a) Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
  b) Concatenar as duas strings e retornar o resultado.
  c) Chamar a função e exibir no console o resultado. */
  
  function atv1_2(st1, st2){
    
    let parametro = st1.toUpperCase();
    let duasStrings = parametro.concat(" " + st2);
    
    return (duasStrings);
  }
  
  console.log(atv1_2("Inara", "Oliveira"));
  
  /* 3) Criar uma função que retorne 17 vezes a palavra Repetição.
  a) Chamar a função e exibir no console o resultado. */
  
  let repetir = () => {
    let repetirPalavra = "Repetição ";
    return (repetirPalavra.repeat(17));
  }
  
  console.log(repetir())