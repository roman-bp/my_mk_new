const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('mission.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `
        <div class="wrapMission" id="container">
        
        <div class="wrap1">
        
        <span class ="numberMission">${item.id}</span> 
        <div class="nameField">місто ${item.town}</div>            
        
        </div>
        <div class="nameFieldBlock">вулиця ${item.street}</div> 
        <div class="nameFieldBlock"> <p>будинок ${item.house}</p></div>
        <div class="nameFieldBlock"> <p>під"їзд ${item.entrance}</p></div>
        <div class="nameFieldBlock"><p>квартира ${item.flat}</p></div>
        <div class="nameFieldBlock"><p>поверх. ${item.floor}</p> </div>
        <div>
        <button type="button" class="complete-button">Выполнено</button>
        <button type="button"><a href="tel:${item.phone}">Позвонить</a></button>
        <button type="button" class="complete-button1">Отмена</button>
        </div>
        </div>

       
        `
        productsContainer.insertAdjacentHTML('beforeend', productHTML);

       


    });

    // Получаем все кнопки с классом "complete-button"
    const completeButtons = document.querySelectorAll('.complete-button');

    // Добавляем обработчик события щелчка на каждую кнопку "Выполнено"
    completeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const parentElement = button.parentElement.parentElement;
            parentElement.classList.add('is-closed');
            parentElement.classList.remove('is-open');
        });
    });
   

    // Получаем все кнопки с классом "complete-button1"
const completeButtons1 = document.querySelectorAll('.complete-button1');

// Добавляем обработчик события щелчка на каждую кнопку "Отмена"
completeButtons1.forEach(function (button) {
    button.addEventListener('click', function () {
        const parentElement = button.parentElement.parentElement;
        parentElement.classList.add('is-open');
        parentElement.classList.remove('is-closed');
    });
});
}

