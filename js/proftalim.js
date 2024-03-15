document.body.insertAdjacentHTML('beforeend', `
  <div id="loader">  
    <div class="boxes">
      <div class="box"><div></div><div></div><div></div><div></div></div>
      <div class="box"><div></div><div></div><div></div><div></div></div>
      <div class="box"><div></div><div></div><div></div><div></div></div>
      <div class="box"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
`);

const loader = document.getElementById('loader');
// API dan ma'lumotlarni olish
fetch('https://developer1.pythonanywhere.com/management/get-education')
  .then(response => response.json())
  .then(data => {
    // HTML-da joylashgan elementni topamiz
    const directorContainer = document.getElementById('list_rahbariyat');

    loader.style.display = 'none';

    // Ma'lumotlar uchun forEach tsikli
    data.forEach(item => {
      // Yangi elementlarni yaratamiz
      const titleContainer = document.createElement('div');
      titleContainer.classList.add('title__rax');

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('rasm__rax');
      const img = document.createElement('img');
      img.src = `http://developer1.pythonanywhere.com${item.image}`;
      img.alt = '';
      imgContainer.appendChild(img);

      const textContainer = document.createElement('div');
      textContainer.classList.add('text__rax');

      const h2Rax = document.createElement('h3');
      h2Rax.classList.add('h2__rax');
      h2Rax.textContent = item.position;

      const h3Rax = document.createElement('h2');
      h3Rax.classList.add('h3__rax');
      h3Rax.textContent = item.fullname;

      const pInf1 = document.createElement('p');
      pInf1.classList.add('text__inf');
      pInf1.innerHTML = `<b>Qabulxona raqami:</b> ${item.phone_number}`;

      const pInf2 = document.createElement('p');
      pInf2.classList.add('text__inf');
      pInf2.innerHTML = `<b>Qabul kunlari:</b> ${item.office_hours}`;

      const pInf3 = document.createElement('p');
      pInf3.classList.add('text__inf');
      pInf3.innerHTML = `<b>E-mail:</b> <a href="mailto:${item.email}" class="e__mail">${item.email}</a>`;

      // Elementlarni bir-biriga qo'shamiz
      textContainer.appendChild(h2Rax);
      textContainer.appendChild(h3Rax);
      textContainer.appendChild(pInf1);
      textContainer.appendChild(pInf2);
      textContainer.appendChild(pInf3);

      titleContainer.appendChild(imgContainer);
      titleContainer.appendChild(textContainer);

      // Yuqoridagi elementni HTML-ga qo'shamiz
      directorContainer.appendChild(titleContainer);
    });
  })
  .catch(error => {
    console.error('Xato:', error);
    // Handle error: Hide the loader or show an error message
    loader.style.display = 'none';
  });