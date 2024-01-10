function efficientSum(nums, requiredSum) {
  //con el metodo ordeno el array en orden ascendete.
  nums.sort((a, b) => a - b);
  // aca inicializo 2 indices, left al comienzo del array y right al final del array.
  let left = 0;
  let right = nums.length - 1;
  //en este bucle while se ejecutara mientras left sea menos que right
  while (left < right) {
    //calculo la suma de los numeros en las posiciones left y right.
    const currentSum = nums[left] + nums[right];
    //con if compruebo si la suma actual es igual a la suma requerida.
    if (currentSum === requiredSum) {
      //si es igual, se encontro un par y cumple con la condicion.
      return true;
    } else if (currentSum < requiredSum) {
      // aca si la suma actual es menor a la requerida, se mueve left hacia numeros mas grandes.
      left++;
    } else {
      //si la suma es mayor a la requerida, se mueve right hacia numeros mas pequeños.
      right--;
    }
  }
  //si el bucle termina y no encontro ningun par que sume lo querido devuelvo false.
  return false;
}

//prueba ejemplo 1
const nums1 = [1, 4, 3, 9];
const requiredSum1 = 8;
console.log("Resultado para ejemplo 1 eficiente;",efficientSum(nums1, requiredSum1)); //output esperado: false

//prueba ejemplo 2
const nums2 = [1, 2, 4, 4];
const requiredSum2 = 8;
console.log("Resultado para ejemplo 2 eficiente:",efficientSum(nums2, requiredSum2)); //output esperado: true

// Medicion del tiempo de ejecucion utilizando Performance.now()
// investigando un poco sobre esto me parecio un plus utilizar este metodo para hacer una medicion de ejecucion del algoritmo y asi poder demostrar las diferencias de este con el agortimo 1.
const startTime = performance.now();
const result = efficientSum(nums1, requiredSum1);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(
  `La función efficientSum() tardó ${executionTime} milisegundos en ejecutarse.`
);
