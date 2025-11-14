const items = document.getElementById('items');
const loader = document.getElementById('loader');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const createItemElement = (code, value) => {
  const item = document.createElement('div');
  item.className = 'item';

  const codeElement = document.createElement('div');
  codeElement.className = 'item__code';
  codeElement.textContent = code;

  const valueElement = document.createElement('div');
  valueElement.className = 'item__value';
  valueElement.textContent = value;

  const currencyElement = document.createElement('div');
  currencyElement.className = 'item__currency';
  currencyElement.textContent = 'руб.';

  item.appendChild(codeElement);
  item.appendChild(valueElement);
  item.appendChild(currencyElement);

  return item;
};

const renderRates = (rates) => {
  items.innerHTML = '';
  Object.values(rates).forEach((rate) => {
    const itemElement = createItemElement(rate.CharCode, rate.Value);
    items.appendChild(itemElement);
  });
};

const showLoader = () => loader.classList.add('loader_active');
const hideLoader = () => loader.classList.remove('loader_active');

const loadRates = () => {
  showLoader();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      try {
        const data = JSON.parse(xhr.responseText);
        renderRates(data.response.Valute);
      } catch (error) {
        console.error('Ошибка обработки данных курса валют:', error);
      }
    } else {
      console.error('Не удалось получить курс валют. Статус:', xhr.status);
    }
    hideLoader();
  });

  xhr.addEventListener('error', () => {
    console.error('Ошибка сети при получении курса валют');
    hideLoader();
  });

  xhr.send();
};

loadRates();
