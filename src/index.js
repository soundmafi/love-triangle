/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    preferences.sort(function (a,b){
      return (a - b)}); // сортируем массив от меньшего к большему
      var c = preferences.length; //количество элементов массива
      var first ; //первый
      var second; //второй
      var third; //третий
      var newmas = []; // массив для подсчёта треугольников
    
 // Если числа последовтельны, то по условию станут равны друг другу   
for (i = 0; i < (c-2); i++){
  first = preferences[i];
  second = preferences [i + 1] -1;
  third = preferences [i + 2] - 2;
    if (first == second){ 
    if (second ==  third){
    newmas.unshift(1); // записывает 1 треугольник в массив для подсчёта
    i = i + 2;}}} //если сработал теугольник, то  пропускаем 2 числа 

var count = newmas.length; //подсчитывыаем длину считающего массива
return(count);} // возвращаем число возможных треугольников
