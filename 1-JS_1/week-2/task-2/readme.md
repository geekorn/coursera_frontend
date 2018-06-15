# Задание по программированию: Уникальный список хештегов

В этом задании необходимо убрать повторения из списка хештегов и привести их к нижнему регистру. Результатом должна быть строка. Хештеги в строке должны быть разделены запятой и пробелом: `tag1, tag2, tag3`.

---

    var normalizeHashTags = require('./index.js');

    console.info(normalizeHashTags(['web', 'coursera', 'JavaScript',     'Coursera', 'script', 'programming']));

    // "web, coursera, javascript, script, programming"
  
---
## Условия
- Гарантируется, что массив содержит только хештеги.
- Массив может быть пустым. В этом случае должна вернуться пустая строка.
- Хештег — непустая строка, состоящая из одного слова.
- Повторяющиеся хештеги нужно игнорировать.
- При сравнении хештегов следует игнорировать регистр букв.
- Порядок хештегов из исходного массива должен сохраниться.
---
## Подсказки
Для выполнения этого задания может понадобиться метод массива [join](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

---
> **Важно**. В рамках курса мы следуем стандарту языка EcmaScript 5. Решения с использованием конструкций нового стандарта не пройдут проверку. Подробнее о EcmaScript вы можете узнать в википедии.