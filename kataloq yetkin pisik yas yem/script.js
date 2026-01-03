fetch('yetkinpisikyasyem.json')
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById('catalog');

    // Модальные элементы
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const closeBtn = document.getElementById('modal-close');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
      `;

      // При клике на карточку — открываем модальное окно
      card.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = item.image;
        modalName.textContent = item.name;
      });

      catalog.appendChild(card);
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });