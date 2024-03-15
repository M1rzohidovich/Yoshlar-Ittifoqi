function createImageElement(src) {
    const imgLink = document.createElement('div');
    imgLink.classList.add('img__link_srection');
    const img = document.createElement('img');
    img.classList.add('news_img');
    img.src = src;
    img.alt = '';
    imgLink.appendChild(img);
    return imgLink;
}

// Function to create a text element
function createTextElement(text, className = '') {
    const textElement = document.createElement('p');
    textElement.classList.add('news_item__text');
    textElement.classList.add(className);
    textElement.innerHTML = text;
    return textElement;
}

// Function to create a video element
// function createVideoElement(videoURL) {
//     const videoContainer = document.createElement('div');
//     videoContainer.classList.add('video__container');
//     const video = document.createElement('video');
//     video.src = videoURL;
//     video.controls = true;
//     videoContainer.appendChild(video);
//     return videoContainer;
// }

window.addEventListener('load', (e) => {
    const listContainerNews = document.querySelector('#imtiyozlar_item');
    const data = JSON.parse(localStorage.getItem('Data_privilages'));

    // Create the main news item container
    const listItem = document.createElement('div');
    listItem.classList.add('news_item');

    // Create the media container
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media');

    // Create and append the images
    const imgLink1 = createImageElement(`https://developer1.pythonanywhere.com/${data.image}`);
    mediaContainer.appendChild(imgLink1);

    // if (data.image2 !== null) {
    //     const imgLink2 = createImageElement(`https://developer1.pythonanywhere.com/${data.image1}`);
    //     mediaContainer.appendChild(imgLink2);
    // }

    // Create and append the video element
    // if (data.video !== null) {
    //     const videoLink = createVideoElement(`https://developer1.pythonanywhere.com/${data.video}`);
    //     mediaContainer.appendChild(videoLink);
    // }

    // Append the media container to the main news item container
    listItem.appendChild(mediaContainer);

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
});