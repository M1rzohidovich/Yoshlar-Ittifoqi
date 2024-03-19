document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');

    fetch('https://developer1.pythonanywhere.com/main/get-document')
        .then(response => response.json())
        .then(data => {
            const directorContainer = document.getElementById('list_docs');

            data.forEach(item => {
                const titleContainer = document.createElement('div');
                titleContainer.classList.add('hujjat');
                titleContainer.id = item.id;

                const link = document.createElement('a');
                link.href = "#";
                link.classList.add('icon__text');
                link.id = item.id;

                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img__page');
                const img = document.createElement('img');
                img.src = `https://developer1.pythonanywhere.com/${item.image}`;
                img.alt = '';
                imgContainer.appendChild(img);
                imgContainer.id = item.id;
                img.id = item.id;

                
                const h3Rax = document.createElement('h3');
                h3Rax.classList.add('icon__text');
                h3Rax.textContent = item.title;
                h3Rax.id = item.id;

                h3Rax.addEventListener('mouseover', function () {
                    h3Rax.style.color = 'blue';
                });

                h3Rax.addEventListener('mouseout', function () {
                    h3Rax.style.color = '';
                });

                const textContainer = document.createElement('div');

                const pInf1 = document.createElement('p');
                pInf1.classList.add('page__text');
                const truncatedDescription = item.description.slice(0, 350) + "...";
                pInf1.innerHTML = truncatedDescription;
                pInf1.id = item.id;

                const pInf2 = document.createElement('p');
                pInf2.classList.add('text__inf');
                pInf2.textContent = `${item.upload_date}`;
                pInf2.id = item.id;

                textContainer.appendChild(h3Rax);
                textContainer.appendChild(pInf1);
                textContainer.appendChild(pInf2);
                titleContainer.appendChild(imgContainer);
                titleContainer.appendChild(textContainer);
                titleContainer.appendChild(link);

                titleContainer.addEventListener('click', (e) => {
                    fetch(`https://developer1.pythonanywhere.com/main/get-document/${e.target.id}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);

                            if (data) {
                                localStorage.setItem('Data_docs', JSON.stringify(data));
                                waitForData();
                            }
                        });
                });

                directorContainer.appendChild(titleContainer);
            });

    
        })
        .catch(error => {
            console.error('Error:', error);
        });

    function waitForData() {
        const data = JSON.parse(localStorage.getItem('Data_docs'));

        if (data) {
            window.location = 'docs_item.html';
        } else {
            setTimeout(waitForData, 3000);
        }
    }
});
