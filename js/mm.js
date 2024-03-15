// function createImageElement(src) {
//     const imgLink = document.createElement('div');
//     imgLink.classList.add('img__link');
//     const img = document.createElement('img');
//     img.src = src;
//     img.alt = '';
//     imgLink.appendChild(img);
//     return imgLink;
// }

// // Function to create a text element
// function createTextElement(text) {
//     const textElement = document.createElement('p');
//     textElement.classList.add('news_item__text');
//     textElement.innerHTML = text;
//     return textElement;
// }

// // Function to create a video element
// function createVideoElement(videoURL) {
//     const videoContainer = document.createElement('div');
//     videoContainer.classList.add('video__container');
//     const video = document.createElement('video');
//     video.src = videoURL;
//     video.controls = true;
//     videoContainer.appendChild(video);
//     return videoContainer;
// }

// window.addEventListener('load', (e) => {
//     const listContainerNews = document.querySelector('#ownerss_item');
//     const data = JSON.parse(localStorage.getItem('Data_owners'));

//     // Create the main news item container
//     const listItem = document.createElement('div');
//     listItem.classList.add('news_item');

//     // Create and append the images
//     const imgLink1 = createImageElement(`https://developer1.pythonanywhere.com/${data.image1}`);
//     listItem.appendChild(imgLink1);

//     if (data.image2 !== null) {
//         const imgLink2 = createImageElement(`https://developer1.pythonanywhere.com/${data.image2}`);
//         listItem.appendChild(imgLink2);
//     }

//     // Create and append the video element
//     if (data.video !== null) {
//         const videoLink = createVideoElement(`https://developer1.pythonanywhere.com/${data.video}`);
//         listItem.appendChild(videoLink);
//     }

//     // Create and append the header element
//     const item_header = createTextElement(data.title);
//     listItem.appendChild(item_header);

//     // Create and append the description text element
//     const item_text = createTextElement(data.description);
//     listItem.appendChild(item_text);

//     // Create and append the upload date text element
//     const item_textt = createTextElement(`${data.upload_date}`);
//     listItem.appendChild(item_textt);

//     // Append the main news item container to the list container
//     listContainerNews.appendChild(listItem);
// });


// 2- jss koddd ------------------------------------------------------------------------------------------------------------------------------------

// function createImageElement(src) {
//     const imgLink = document.createElement('div');
//     imgLink.classList.add('img__link');
//     const img = document.createElement('img');
//     img.src = src;
//     img.alt = '';
//     imgLink.appendChild(img);
//     return imgLink;
// }

// // Function to create a text element
// function createTextElement(text, className = '') {
//     const textElement = document.createElement('p');
//     textElement.classList.add('news_item__text');
//     textElement.classList.add(className);
//     textElement.innerHTML = text;
//     return textElement;
// }

// // Function to create a video element
// function createVideoElement(videoURL) {
//     const videoContainer = document.createElement('div');
//     videoContainer.classList.add('video__container');
//     const video = document.createElement('video');
//     video.src = videoURL;
//     video.controls = true;
//     videoContainer.appendChild(video);
//     return videoContainer;
// }

// window.addEventListener('load', (e) => {
//     const listContainerNews = document.querySelector('#ownerss_item');
//     const data = JSON.parse(localStorage.getItem('Data_owners'));

//     // Create the main news item container
//     const listItem = document.createElement('div');
//     listItem.classList.add('news_item');

//     // Create the media container
//     const mediaContainer = document.createElement('div');
//     mediaContainer.classList.add('media');

//     // Create and append the images
//     const imgLink1 = createImageElement(`https://developer1.pythonanywhere.com/${data.image1}`);
//     mediaContainer.appendChild(imgLink1);

//     if (data.image2 !== null) {
//         const imgLink2 = createImageElement(`https://developer1.pythonanywhere.com/${data.image2}`);
//         mediaContainer.appendChild(imgLink2);
//     }

//     // Create and append the video element
//     if (data.video !== null) {
//         const videoLink = createVideoElement(`https://developer1.pythonanywhere.com/${data.video}`);
//         mediaContainer.appendChild(videoLink);
//     }

//     // Append the media container to the main news item container
//     listItem.appendChild(mediaContainer);

//     // Create and append the header element
//     const item_header = createTextElement(data.title, 'news_item__header');
//     listItem.appendChild(item_header);

//     // Create and append the description text element
//     const item_text = createTextElement(data.description, 'text');
//     listItem.appendChild(item_text);

//     // Create and append the upload date text element
//     const item_textt = createTextElement(`${data.upload_date}`, 'upload_date');
//     listItem.appendChild(item_textt);

//     // Append the main news item container to the list container
//     listContainerNews.appendChild(listItem);
// });

// -----------------------------------------------------------------------------------------
// window.addEventListener('load', (e)=>{
//     const listContainerNews = document.querySelector('#yangiliklar_item')
// data = JSON.parse(localStorage.getItem('Data_news'))
//         const listItem = document.createElement('div');
//         listItem.classList.add('news_item');

//         const imgLink = document.createElement('div');
//         imgLink.classList.add('img__link');
//         const img = document.createElement('img');
//         img.src = `https://developer1.pythonanywhere.com/${data.img1}`;
//         img.alt = '';
//         imgLink.appendChild(img);
//         console.log(imgLink);

//         const item_header = document.createElement('h3');
//         item_header.classList.add('news_item__header');
//         item_header.textContent = data.title
//         console.log(item_header);

//         const item_text = document.createElement('p');
//         item_text.classList.add('news_item__text');
//         item_text.innerHTML = data.description
//         console.log(item_text);

//         listItem.appendChild(imgLink)
//         listItem.appendChild(item_header)
//         listItem.appendChild(item_text)
//         console.log(listItem);

//         listContainerNews.appendChild(listItem)


// })


// window.addEventListener('load', (e)=>{
//     const listContainerNews = document.querySelector('#imtiyozlar_item')
// data = JSON.parse(localStorage.getItem('Data_privilages'))
//         const listItem = document.createElement('div');
//         listItem.classList.add('news_item');

//         const imgLink = document.createElement('div');
//         imgLink.classList.add('img__link');
//         const img = document.createElement('img');
//         img.src = `https://developer1.pythonanywhere.com/${data.image}`;
//         img.alt = '';
//         imgLink.appendChild(img);
//         console.log(imgLink);

//         const item_header = document.createElement('h3');
//         item_header.classList.add('news_item__header');
//         item_header.textContent = data.title
//         console.log(item_header);

//         const item_text = document.createElement('p');
//         item_text.classList.add('news_item__text');
//         item_text.innerHTML = data.description
//         console.log(item_text);

//         const item_textt = document.createElement('p');
//         item_textt.classList.add('news_item__text');
//         item_textt.textContent = `${data.upload_date}`;

//         listItem.appendChild(item_header)
//         listItem.appendChild(imgLink)
//         listItem.appendChild(item_header)
//         listItem.appendChild(item_text)
//         listItem.appendChild(item_textt)
//         console.log(listItem);

//         listContainerNews.appendChild(listItem)


// })