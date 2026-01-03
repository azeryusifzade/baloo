fetch('xxxxxxx.json')
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById('catalog');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
      `;

      catalog.appendChild(card);
    });
  });