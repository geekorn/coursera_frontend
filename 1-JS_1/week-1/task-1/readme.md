# Задание по программированию: Сложить два числа

В этом задании необходимо сложить два числа. Цель заданий — настроить окружение и запустить простую программу.

---

    var sum = require('./index.js');
  
    console.info(sum(12, 33)); 
  
    // 45
  
    console.info(sum(101, '17')); 
  
    // 118  
  
---
## Условия
- Функция в качестве аргументов может принимать как положительное или отрицательное число, так и строку, в которой содержится число (например, "12").
- Если переданная строка содержит не только цифры, то функция должна вернуть NaN. Например, нельзя сложить строку "12 бегемотов" и строку "38 попугаев".
---
## Подсказки
Для решения задачи рекомендуем познакомиться с исключениями, а также методами [parseInt](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt), [NaN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN) и [Number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number).