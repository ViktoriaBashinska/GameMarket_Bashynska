//перевірка підключеного файлу скрптів
console.log('Перевірка підключеного файлу скриптів market.js')

//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//пеервірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv)
    //вивід значення поля знайденого елементу
    console.log('Поле classlist: ', itemsDiv.classList)
    console.log('Поле id:', itemsDiv.id)
    console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)
    //додавання відформатованого HTML коду в блок
    itemsDiv.innerText = 'Програмно доданий текст'
} else {
    //вивід повідомлення про не знайдений елемент
    console.log('Блок товарів не знайдено')
}
