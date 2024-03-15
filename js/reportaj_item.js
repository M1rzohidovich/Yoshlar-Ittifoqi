
// Function to create a text element
function createTextElement(text, className = '') {
    const textElement = document.createElement('p');
    textElement.classList.add('news_item__text');
    textElement.classList.add(className);
    textElement.innerHTML = text;
    return textElement;
}

// Function to create a video element
function createVideoElement(videoURL) {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video__container');
    const video = document.createElement('video');
    video.src = videoURL;
    video.controls = true;
    videoContainer.appendChild(video);
    return videoContainer;
}

window.addEventListener('load', (e) => {
    const listContainerNews = document.querySelector('#reportaj_item');
    const data = JSON.parse(localStorage.getItem('Data_report'));

    // Create the main news item container
    const listItem = document.createElement('div');
    listItem.classList.add('news_item');

    // Create the media container
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media');

    // Create and append the images
    
    // Create and append the video element
    if (data.video !== null) {
        const videoLink = createVideoElement(`https://developer1.pythonanywhere.com/${data.video}`);
        mediaContainer.appendChild(videoLink);
    }

    // Append the media container to the main news item container
    listItem.appendChild(mediaContainer);

    // Create and append the header element
    const item_header = createTextElement(data.title, 'news_item__header');
    listItem.appendChild(item_header);

    // Create and append the upload date text element
    const item_textt = createTextElement(`${data.upload_date}`, 'upload_date');
    listItem.appendChild(item_textt);

    // Append the main news item container to the list container
    listContainerNews.appendChild(listItem);
});