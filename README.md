# Code-Format-words-into-a-sentence

Решение задачи по созданию функции для форматирования слов в предложении

### Описание задачи
- создать функцию, которая будет заменять последнюю запятую в предложении на строку ' and '
### Пример
- [ "ninja", "", "samurai", "", "ronin", "alex", "vlad" ]   -->   "ninja, samurai, ronin, alex and vlad"
### Данные на входе
- массив со строками
### Данные на выходе
- строка
### Ограничения
- если на входе не массив, вернуть пустую строку
- если на входе пустрой массив, вернуть пустую строку
- если на входе один элемент вернуть его
- пустые строки в массиве игнорируются
### Функциональность
- проверка входных данных на валидность согласно ограничениям
- фильтрация на пустые строки
- поиск и замена символа в строке на подстроку согласно заданию
