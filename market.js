//перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів')
//отримання елементу з ідентифікатором items
//let itemsDiv = document.getElementById("items");
 //перевірка існування знайденого блоку
//if (itemsDiv) {
   //вивід знайденого елементу
   //console.log (itemsDiv)
   //вивід значення поля знайденого елементу
  // console.log ('Поле classList:', itemsDiv.classList)
   //console.log ('Поле id:', itemsDiv.id)
   //console.log ('Поле clientWidth:', itemsDiv.clientWidth)
  // console.log ('Поле innerHTML:', itemsDiv.innerHTML)

   //додавання тексту в блок
   //.innerText = 'Перший програмно доданий текст'
   //itemsDiv.innerText += 'Другий програмно доданий текст'
   //додавання відформатованого HTML коду в блок
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //for (let i = 0; i < 6; i++) {
   //  itemsDiv.innerHTML += '<div class = "item"></div>'
  // }
//} else {
//вивід повідомлення про незнайдений блок
//console.log ('Блок товарів не знайдено')
//}
//виведення масиву товарів
//let itemsArray = [
  // 'Газонокосарка 43',
   //'Електричний тример 110',
   //'Електрична газонокосарка 32',
   //'Акумуляторний оприскувач 12 N',
//]
//отримання елементу з ідентифікатором items
//let itemsDiv = document.getElementById("items");
//перевірка існування знайденого блоку
//if (itemsDiv) {
   //виведення елементів масиву
  // itemsArray.forEach((item) =>{
      //console.log(item)
      //itemsDiv.innerText += item
      //спеціальний апостроф (англ розкладка, біля кнопки 1)
      //itemsDiv.innerHTML += `
      //<div class = "item">
      //<p>${item}</p>
      //</div>`
   //})
//} else {
   //вивід повідомлення про не знайдений блок
  // console.log('Блок товарів не знайдено')
//}
//виведення масиву в консоль
//console.log (itemsArray)
//виведення в консоль елементів масиву
//for (let i = 0; i < itemsArray.length; i++) {
//   console.log (itemsArray[i])
//}

//визначення масиву об'єктів
let itemsArray = [
   {
      firstName: "Віталій",
      lastName: "Шатківський",
      age: 43,
      subject: "CS",
      photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
      url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
   },
   {
      firstName: "Наталія",
      lastName: "Венцель",
      age: 18,
      subject: "Адміністратор",
      photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
      url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
   }
]
//отримання елементу з ідентифікатором item
let itemsDiv = document.getElementById("items");
//перевірка існування знайденого блоку
if (itemsDiv) {
   //створення блоків по кількості елементів масиву
   itemsArray
   //сортування за прізвищем
   //.sort((a,b) => a.lastName.localeCompare(b.lastName))
   .forEach ((item, index) => {
      //виводимо на веб сторінку елемент масиву в блок з класом item
      itemsDiv.innerHTML += 
   `
   <div class = "item">
      <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
      <p>${item.firstName} ${item.lastName}</p>
      <p>Предмет: ${item.subject}</p>
      <p><img src = "${item.photo}" class="item-image"></p>
      <p><a href = "${item.url}" target = "_blank" class = "bonus price">Профіль<a/></p>
      <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
      class = "price "> Написати </a></p>
   </div>
   `
   })
} else {
   //вивід повідомлення про не знайдений блок
   console.log('Блок товарів не знайдено')
}
