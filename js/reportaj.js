document.body.insertAdjacentHTML('beforeend', `
<div  id="loader">  
<div class="boxes">
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  </div>
`);

const loader = document.getElementById('loader');

const listContainer = document.getElementById('reprotaj_list');
fetch('https://developer1.pythonanywhere.com/main/get-report') // Change the API endpoint
  .then(response => response.json())
  .then(data => {
    document.getElementById('loader').style.display = 'none';

    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('item1');
      listItem.id = item.id;

      const link = document.createElement('a');
      link.href = '#';
      link.classList.add('item__link1');
      link.id = item.id;

      const imgLink = document.createElement('div');
      imgLink.classList.add('img__link');
      const img = document.createElement('img');
      img.src = `https://developer1.pythonanywhere.com/${item.image}`;
      img.alt = '';
      imgLink.appendChild(img);

      const textLink = document.createElement('p');
      textLink.classList.add('text__link');
      textLink.textContent = `${item.upload_date}`;

      const hLink = document.createElement('h3');
      hLink.classList.add('h__link');
      hLink.textContent = item.title.length > 95 ? item.title.substring(0, 95) + '... batafsil' : item.title;

      link.appendChild(imgLink);
      link.appendChild(textLink);
      link.appendChild(hLink);

      listItem.appendChild(link);

      listContainer.appendChild(listItem);
    });
  })
  .catch(error => {
    document.getElementById('loader').style.display = 'none';
    console.error('Error:', error);
  });

listContainer.addEventListener('click', (e) => {
    fetch(`https://developer1.pythonanywhere.com/main/get-report/${e.target.id}`) // Change the API endpoint
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data) {
                // LocalStorage ga ma'lumotni saqlash
                localStorage.setItem('Data_report', JSON.stringify(data));

                // Data kelganida kutishni boshlash
                waitForData();
            }
        });
});

function waitForData() {
    // LocalStorage dan ma'lumot olish
    const data = JSON.parse(localStorage.getItem('Data_report'));

    // Agar ma'lumotlar mavjud bo'lsa sahifani yuborish
    if (data) {
        window.location = 'reportaj_item.html';
    } else {
        // Ma'lumotlar hali kelmasa, kuting va tekshirishni qayta boshlash
        setTimeout(waitForData, 3000); // Masalan, 100 millisekund so'ng qayta tekshirish
    }
}