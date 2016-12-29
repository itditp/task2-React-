
## TASK##

Front-end приложение

Структура:
Приложение с TabBar ( таб бар должен быть расположен  внизу экрана):
Кнопки таб бара:
- List
- Service

1. List:
1.1. Проработать модель данных, реализующую организационную структуру предприятия. Реализовать следующие сущности:

Тип сотрудников:
а) Руководство
б) Сотрудники

У всех сотрудников должны быть параметры "Зарплата", "ФИО".
У руководства, дополнительно, должен быть параметр "Часы приема".
У сотрудников "Номер рабочего места", "Обеденное время".

1.2. Вывести список (по умолчанию выводить список отсортированным по имени).
1.4. Вверху справа сделать кнопку [Add], которая открывает подэкран с формой добавления нового пункта: 

- Вверху справа Save.
- Ниже переключатель типа сотрудника (можно использовать просто radioButton)
- Ниже должны располагаться поля для заполнения параметров соответствующих выбранному типу сотрудника.

1.5. При клике на пункт в списке сотрудников открывать форму просмотра. На форме просмотра должна быть кнопка "Edit" - показывающая интерфейс редактирования (индентичную форме добавления нового пункта).
 
Примечание: 
Приложение должно запоминать все вносимые в список изменения (добавление новых пунктов, редактирование существующих) - т.е. после перезапуска приложения всё должно быть так, как было до закрытия приложения. Данные хранить в localStorage.


2. Service:

2.1. Получить от данного URL-а данные: https://jsonplaceholder.typicode.com/posts
2.2. Вывести полученные данные как статичный скроллируемый список, в произвольном виде (на свой выбор - главное чтобы было читаемо).
2.3. Во время загрузки показывать троббер.

Технические требования:

Тестовое задание должно быть выполнено c использованием:
 UI library http://www.material-ui.com/
Webpack https://webpack.github.io/
React https://facebook.github.io/react/
Redux https://github.com/reactjs/redux
Ресурс с полезными видеоуроками https://egghead.io/technologies/react




```sh
for prodaction: npm run build

for developer: npm start -s
```