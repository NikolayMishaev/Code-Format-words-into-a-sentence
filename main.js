"use strict";

/* 

данные на входе: массив
данные на выходе: строка

ограничения:
1) если на входе не массив, вернуть пустую строку
2) если на входе пустрой массив, вернуть пустую строку
3) пустые строки в массиве игнорируются

псевдокод:
  проверить что на входе массив (ограничение № 1)
  проверить что на входе массив не пустой (ограничение № 2)
  отфильтровать массив проверив, что каждый элемент массива строка и строка не пустая (ограничение № 3)
  привести массив к строке по разделителю запятая
  найти в строке индекс последнего вхождения запятой
вырезать из строки подстроку №1 от начала строки до индекса с запятой
вырезать из строки подстроку №2 от следующего индекса за запятой до конца строки
сложить подстроку № 1, строку " and ", подстроку № 2 и вернуть как результат 

*/

function formatWords(words){

  const isValid = (arr) => arr.length > 0

  if (!Array.isArray(words)) return ''
  if (!isValid(words)) return ''
  const filteredWords = words.filter(el=> !!el).join(',')
  if (!isValid(filteredWords)) return ''
  const targetIndex = filteredWords.lastIndexOf(',')
  return targetIndex

}


// console.log(formatWords(undefined))
// console.log(formatWords([]))
// console.log(formatWords(['']))
// console.log(formatWords(['','','']))
console.log(formatWords(['ninja','', 'samurai','', 'ronin']))