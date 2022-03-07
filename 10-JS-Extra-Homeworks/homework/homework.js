// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr = [];
  var key= Object.keys(objeto)
  var value= Object.values(objeto);

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < value.length; j++) {
          arr.push([key[i],value[j]]);
      i++;
    }
    
  }
 
  return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  obj={}
  for (let i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] = obj[string[i]]+1;
    }else{
      obj[string[i]] = 1;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var comv=s.split('');
  var arr=[];
  var arr2=[]

  for (let i = 0; i< comv.length; i++) {
    if (comv[i]===comv[i].toUpperCase()) {
      arr.push(comv[i]);
    }else{
      arr2.push(comv[i]);
    }
  }
  
  return arr.join('')+arr2.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espj=str.split(' ')
  var espejo=[];
  
  for (let i = 0;i<espj.length;i++) {
    espejo.push(espj[i].split('').reverse().join(''));
  }
  return espejo.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cov=[];

  var numeros=String(numero);
  var rar=numeros.split('')

  for (let i = rar.length- 1; i >= 0; i--) {
    cov.push(rar[i]);
  }

  var espejo=cov.join('');

  
  if (numeros==espejo) {
    return "Es capicua"
    
  }else {return "No es capicua"}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaseparada= cadena.split('')

for (let i = 0; i <cadenaseparada.length; i++) {
    if (cadenaseparada[i]=="a"||cadenaseparada[i]=="b"||cadenaseparada[i]=="c") {
      delete cadenaseparada[i];
    }
  }
    return  cadenaseparada.join('');

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  cambio=true;
  while(cambio){
    cambio=false;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i].length>arr[i+1].length) {
        var aux=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=aux
        cambio=true;
      }
    }
  }
  return arr;

 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arr=[];
  var arr1=arreglo1.sort();
  var arr2=arreglo2.sort();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i]===arr2[j]) {
        arr.push(arr1[i]);
      }
      
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

