fetch('mehsullar.json')
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById('catalog');

    // Элементы модального окна
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

      // При клике на карточку открываем модалку
      card.addEventListener('click', () => {
        modal.classList.add('show');
        modalImg.src = item.image;
        modalName.textContent = item.name;
      });

      catalog.appendChild(card);
    });

    // Закрытие модального окна по крестику
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Закрытие по клику вне контента
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });

