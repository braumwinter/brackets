module.exports = function check(str, bracketsConfig) {
  // рабочий стек
  let stack = [];

  // перебираем строку
  for (let iter_str = 0; iter_str < str.length; iter_str++) {

    // ищем совпадения
    for (let iter_config = 0; iter_config < bracketsConfig.length; iter_config++) {

      // если открывающаяся скобка и закрывающаяся скобка не равны
      if (bracketsConfig[iter_config][0] !== bracketsConfig[iter_config][1]){

        // если скобка открывающая, то помещаем её в стек
        if (str[iter_str] == bracketsConfig[iter_config][0]) {
          stack.push(str[iter_str]);
          break;
        } else if (str[iter_str] == bracketsConfig[iter_config][1]) {
          // если скобка закрывающая

          // если стек пуст, то выходим
          if (stack.length == 0) {
            return false;
          }

          // проверяем последний элемент стека
          // если скобки из одной пары, то извлекаем
          if (stack[stack.length - 1] == bracketsConfig[iter_config][0]) {
            stack.pop();
            break;
          } else {
            // если различаются, то возвращаем false
            return false;
          }
        }
      } else if(bracketsConfig[iter_config][0] == bracketsConfig[iter_config][1] && str[iter_str] == bracketsConfig[iter_config][0]) {
        // если отрывающаяся и закрывающаяся скобки одинаковы

        // если скобка уже помещена в стек, то извлекаем её
        if( stack[stack.length - 1] == bracketsConfig[iter_config][0]){
          stack.pop();
          break;
        } else {
          // если там нет такой скобки, то помещаем её туда
          stack.push(str[iter_str]);
          break;
        }
      }
    }
  }

  // если дошли до конца, то проверяем стек
  // если пуст - то все скобки парные, если нет - возвращаем false
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};
