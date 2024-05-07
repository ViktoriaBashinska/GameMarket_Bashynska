//перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів')

//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

 //перевірка існування знайденого блоку
if (itemsDiv) {
   //вивід знайденого елементу
   console.log (itemsDiv)
   //вивід значення поля знайденого елементу
   console.log ('Поле classList:', itemsDiv.classList)
   console.log ('Поле id:', itemsDiv.id)
   console.log ('Поле clientWidth:', itemsDiv.clientWidth)
   console.log ('Поле innerHTML:', itemsDiv.innerHTML)

   //додавання тексту в блок
   //.innerText = 'Перший програмно доданий текст'
   //itemsDiv.innerText += 'Другий програмно доданий текст'
   //додавання відформатованого HTML коду в блок
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   //itemsDiv.innerHTML += '<div class = "item"></div>'
   for (let i = 0; i < 100; i++) {
      itemsDiv.innerHTML += '<div class = "item"></div>'
   }
} else {
//вивід повідомлення про незнайдений блок
console.log ('Блок товарів не знайдено')
}
