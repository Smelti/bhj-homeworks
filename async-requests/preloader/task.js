document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader'); 
  const itemsContainer = document.getElementById('items');

  const createCurrencyItem = (charCode, value) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const codeElement = document.createElement('div');
    codeElement.classList.add('item__code');
    codeElement.textContent = charCode;

    const valueElement = document.createElement('div');
    valueElement.classList.add('item__value');
    valueElement.textContent = value;

    const currencyElement = document.createElement('div');
    currencyElement.textContent = 'руб.';

    item.appendChild(codeElement);
    item.appendChild(valueElement);
    item.appendChild(currencyElement);

    return item;
  };

  const fetchCurrencies = async () => {
    try {
      loader.classList.add('loader_active');
      const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
      
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      
      const data = await response.json();
      const currencies = data.response.Valute;

      for (const key in currencies) {
        const currency = currencies[key];
        const currencyItem = createCurrencyItem(currency.CharCode, currency.Value);
        itemsContainer.appendChild(currencyItem);
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      loader.classList.remove('loader_active');
    }
  };
  fetchCurrencies();
});
