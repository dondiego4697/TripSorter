#### Сортировщик карточек путешественника
Для запуска программы: **npm run start**

Файл с информацией о карточках называется **cards.json** и лежит в директории ***'/src'***
Файл с API называется: cards.js

Для использования API: </br>
***data*** - (string) массив данных о карточка </br>
***response*** - массив маршрутов </br>
***err*** - описание ошибки </br>
```let cards = new Cards();
       cards.createTripDescription(***data***).then(response => {
           console.log('Route:');
           response.forEach(elem=>{
               console.log(elem);
           });
       }).catch(err => {
           console.log(`${err}`);
       });
```