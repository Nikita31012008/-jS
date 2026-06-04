function switchTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function handleSomethingSubmit() {
    const input = document.getElementById('somethingInput');
    const resultBox = document.getElementById('somethingResult');
    const value = input.value.trim();

    if (value === '') {
        resultBox.style.display = 'block';
        resultBox.style.borderColor = '#ff4a4a';
        resultBox.style.color = '#ff4a4a';
        resultBox.textContent = 'Ошибка: Поле ввода пустое. Напишите что-нибудь!';
        return;
    }

    resultBox.style.display = 'block';
    resultBox.style.borderColor = '#00f2fe';
    resultBox.style.color = '#b5b5c6';
    resultBox.innerHTML = 'Входная строка обработана: ' + value;
    
    input.value = '';
}

function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let randomHex = '';
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        randomHex += hexChars[randomIndex];
    }

    const resultBox = document.getElementById('colorResultBox');
    const apiStatus = document.getElementById('apiStatus');
    const colorPreview = document.getElementById('colorPreview');
    const colorName = document.getElementById('colorName');
    const colorId = document.getElementById('colorId');

    resultBox.style.display = 'block';
    apiStatus.style.color = '#66667e';
    apiStatus.textContent = 'Отправка запроса к серверу...';

    fetch('https://thecolorapi.com' + randomHex)
        .then(response => response.json())
        .then(data => {
            colorPreview.style.backgroundColor = data.hex.value;
            colorName.textContent = data.name.value; 
            colorId.textContent = data.hex.value;

            apiStatus.style.color = '#00ff87';
            apiStatus.textContent = 'Данные успешно получены!';
        });
}
