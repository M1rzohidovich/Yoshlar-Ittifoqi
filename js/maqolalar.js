
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

fetch('https://developer1.pythonanywhere.com/main/get-article')
    .then(response => response.json())
    .then(data => {
        const directorContainer = document.getElementById('list_aricle');

        data.forEach(item => {
            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title__rax');
            titleContainer.id = item.id;

            const link = document.createElement('a');
            link.href = "#";
            link.classList.add('item__link1');
            link.id = item.id;

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('rasm__rax');
            const img = document.createElement('img');
            img.src = `https://developer1.pythonanywhere.com/${item.image}`;
            img.alt = '';
            imgContainer.appendChild(img);
            imgContainer.id = item.id;
            img.id = item.id;

            const textContainer = document.createElement('div');
            textContainer.classList.add('text__rax');
            textContainer.id = item.id;
        
            const h3Rax = document.createElement('h2');
            h3Rax.classList.add('h2__rax');
            h3Rax.textContent = item.title;
            h3Rax.id = item.id;

            h3Rax.addEventListener('mouseover', function () {
                // hover hodisasi yuzaga kelganda bajariladigan amallar
                h3Rax.style.color = 'blue'; // Masalan, matn rangini o'zgartiramiz
            });
            
            h3Rax.addEventListener('mouseout', function () {
                // hover hodisasi tugaganda bajariladigan amallar
                h3Rax.style.color = ''; // Asl rangga qaytaramiz
            });

            const pInf1 = document.createElement('p');
            pInf1.classList.add('text__inf');
            const truncatedDescription = item.description.slice(0, 350) + "...";
            pInf1.innerHTML = truncatedDescription;
            pInf1.id = item.id;
            
            
            
            const pInf2 = document.createElement('p');
            pInf2.classList.add('text__inf');
            pInf2.textContent = `${item.upload_date}`;
            pInf2.id = item.id;

            const pInf3 = document.createElement('h4');
            pInf3.classList.add('text__inf');
            pInf3.textContent = item.after;
            pInf3.id = item.id;
            

            textContainer.appendChild(h3Rax);
            textContainer.appendChild(pInf1);
            textContainer.appendChild(pInf2);
            textContainer.appendChild(pInf3);
            titleContainer.appendChild(imgContainer);
            titleContainer.appendChild(textContainer);
            titleContainer.appendChild(link);

            // Event listener qo'shish
            titleContainer.addEventListener('click', (e) => {
                fetch(`https://developer1.pythonanywhere.com/main/get-article/${e.target.id}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);

                        if (data) {
                            localStorage.setItem('Data_article', JSON.stringify(data));
                            waitForData();
                        }
                    });
            });

            directorContainer.appendChild(titleContainer);
        });

        // Hide the loader after processing the data
        document.getElementById('loader').style.display = 'none';
    })
    .catch(error => {
        document.getElementById('loader').style.display = 'none';
        console.error('Xato:', error);
    });

function waitForData() {
    const data = JSON.parse(localStorage.getItem('Data_article'));

    if (data) {
        window.location = 'article_item.html';
    } else {
        setTimeout(waitForData, 3000);
    }
}
// document.body.insertAdjacentHTML('beforeend', '<div id="loader">Loading...</div>');

// fetch('https://developer1.pythonanywhere.com/main/get-article')
//     .then(response => response.json())
//     .then(data => {
//         const directorContainer = document.getElementById('list_aricle');

//         data.forEach(item => {
//             const titleContainer = document.createElement('div');
//             titleContainer.classList.add('title__rax');
//             titleContainer.id = item.id;

//             const link = document.createElement('a');
//             link.href = "#";
//             link.classList.add('item__link1');
//             link.id = item.id;

//             const imgContainer = document.createElement('div');
//             imgContainer.classList.add('rasm__rax');
//             const img = document.createElement('img');
//             img.src = `https://developer1.pythonanywhere.com/${item.image}`;
//             img.alt = '';
//             imgContainer.appendChild(img);
//             imgContainer.id = item.id;
//             img.id = item.id;

//             const textContainer = document.createElement('div');
//             textContainer.classList.add('text__rax');
//             textContainer.id = item.id;
        
//             const h3Rax = document.createElement('h2');
//             h3Rax.classList.add('h2__rax');
//             h3Rax.textContent = item.title;
//             h3Rax.id = item.id;

//             const pInf1 = document.createElement('p');
//             pInf1.classList.add('text__inf');
//             pInf1.innerHTML = item.description;
//             pInf1.id = item.id;
            
//             const pInf2 = document.createElement('p');
//             pInf2.classList.add('text__inf');
//             pInf2.textContent = `${item.upload_date}`;
//             pInf2.id = item.id;

//             const pInf3 = document.createElement('h4');
//             pInf3.classList.add('text__inf');
//             pInf3.textContent = item.after;
//             pInf3.id = item.id;

//             textContainer.appendChild(h3Rax);
//             textContainer.appendChild(pInf1);
//             textContainer.appendChild(pInf2);
//             textContainer.appendChild(pInf3);
//             titleContainer.appendChild(imgContainer);
//             titleContainer.appendChild(textContainer);
//             titleContainer.appendChild(link);

//             // Event listener qo'shish
//             titleContainer.addEventListener('click', (e) => {
//                 fetch(`https://developer1.pythonanywhere.com/main/get-article/${e.target.id}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         console.log(data);

//                         if (data) {
//                             localStorage.setItem('Data_article', JSON.stringify(data));
//                             waitForData();
//                         }
//                     });
//             });

//             directorContainer.appendChild(titleContainer);
//         });
//     })
//     .catch(error => {
//         document.getElementById('loader').style.display = 'none';
//         console.error('Xato:', error);
//     });

// function waitForData() {
//     const data = JSON.parse(localStorage.getItem('Data_article'));

//     if (data) {
//         window.location = 'article_item.html';
//     } else {
//         setTimeout(waitForData, 100);
//     }
// }