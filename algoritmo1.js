function sumQuickly(nums, requiredSum) {
  //itero sobre cada elemento del arreglo nums usando bucles anidados.
  //el primer for itera sobre cada elemento y el segundo sobre los elementos restantes.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // con este if sumo los dos elementos y compruebo si son iguales a la suma requerida = 8.
      if (nums[i] + nums[j] === requiredSum) {
        // si la condicion se cumple retorno true.
        return true;
      }
    }
  }
  //si no se cumple la condicion retorno false.
  //este return false va por fuera del bloque de los bucles anidados ya que si se coloca en un else despues del if la funcion no explora todas la combinaciones posibles.
  //aclaro esto porque al principio lo puse mal y ambos casos de pruebas me daban false.
  return false;
}

//prueba ejemplo 1
const nums1 = [1, 4, 3, 9];
const requiredSum1 = 8;
console.log("Resultado para ejemplo 1:", sumQuickly(nums1, requiredSum1)); //output esperado: false

//prueba ejemplo 2
const nums2 = [1, 2, 4, 4];
const requiredSum2 = 8;
console.log("Resultado para el ejemplo2:", sumQuickly(nums2, requiredSum2)); //output esperado: true

// Medicion del tiempo de ejecucion utilizando Performance.now()
const startTime = performance.now();
const result = sumQuickly(nums1, requiredSum1);
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(
  `La función sumQuickly() tardó ${executionTime} milisegundos en ejecutarse.`
);
