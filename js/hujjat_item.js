function createTextElement(text, className = '') {
    const textElement = document.createElement('p');
    textElement.classList.add('news_item__text', className); // klass nomi qo'shish uchun bir marta ishlatiladi
    textElement.innerHTML = text; // innerHTML orqali HTML kodlari qo'shilmaydi, balki faqat matn o'zgaruvchisiga tayyorlanadi
    return textElement;
}

window.addEventListener('load', (e) => {
    const listContainerNews = document.querySelector('#docs_item');
    const data = JSON.parse(localStorage.getItem('Data_docs'));

    if (data) { // Ma'lumotlar mavjud bo'lsa ishni bajar
        // Create the main news item container
        const listItem = document.createElement('div');
        listItem.classList.add('news_item');

        // Create and append the header element
        const item_header = createTextElement(data.title, 'news_item__header');
        listItem.appendChild(item_header);

        // Create and append the description text element
        const item_text = createTextElement(data.description, 'text');
        listItem.appendChild(item_text);

        // Create and append the upload date text element
        const item_textt = createTextElement(`${data.upload_date}`, 'upload_date');
        listItem.appendChild(item_textt);

        // Append the main news item container to the list container
        listContainerNews.appendChild(listItem);
    } else {
        console.error("Ma'lumot topilmadi!"); // Agar ma'lumot topilmagan bo'lsa konsolga xato chiqarish
    }
});