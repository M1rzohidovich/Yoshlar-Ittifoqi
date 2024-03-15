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

const listContainer = document.getElementById('news_list');
fetch('https://developer1.pythonanywhere.com/main/get-news')
  .then(response => response.json())
  .then(data => {
    document.getElementById('loader').style.display = 'none';

    data.slice(-4).forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('item1');
      listItem.id = item.id;
      
      // Qolgan qismlar shu o'zgartirilgan kodning oxirgi qismiga o'tkazildi
  
      const link = document.createElement('a');
      link.href = '#';
      link.classList.add('item__link1');
      link.id = item.id
    
      const imgLink = document.createElement('div');
      imgLink.classList.add('img__link');
      const img = document.createElement('img');
      img.src = `https://developer1.pythonanywhere.com/${item.img1}`;
      img.alt = '';
      imgLink.appendChild(img);
    
      const textLink = document.createElement('p');
      textLink.classList.add('text__link');
      textLink.textContent = `${item.upload_date}`;
    
      const hLink = document.createElement('h3');
      hLink.classList.add('h__link');
      hLink.textContent = item.title.length > 87 ? item.title.substring(0, 87) + '... batafsil' : item.title;

      // const descLink = document.createElement('p');
      // descLink.classList.add('desc__link');
      // // CKEditor'da o'zgartirilgan HTML matnini htmlga chiqarish
      // descLink.innerHTML = item.description; 
    
      link.appendChild(imgLink);
      link.appendChild(textLink);
      link.appendChild(hLink);
      // link.appendChild(descLink);
    
      listItem.appendChild(link);
    
      listContainer.appendChild(listItem);
    });
  })
  .catch(error => {
    document.getElementById('loader').style.display = 'none';
    console.error('Xato:', error);
  });


  listContainer.addEventListener('click', (e) => {
    fetch(`https://developer1.pythonanywhere.com/main/get-news/${e.target.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data) {
                // LocalStorage ga ma'lumotni saqlash
                localStorage.setItem('Data_news', JSON.stringify(data));

                // Data kelganida kutishni boshlash
                waitForData();
            }
        });
});

function waitForData() {
    // LocalStorage dan ma'lumot olish
    const data = JSON.parse(localStorage.getItem('Data_news'));

    // Agar ma'lumotlar mavjud bo'lsa sahifani yuborish
    if (data) {
        window.location = './page/news.html';
    } else {
        // Ma'lumotlar hali kelmasa, kuting va tekshirishni qayta boshlash
        setTimeout(waitForData, 3000); // Masalan, 100 millisekund so'ng qayta tekshirish
    }
}
