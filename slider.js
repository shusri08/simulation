// array of images
// const images = [

//     'img/a.png',  //index 0 ---> images[0]
//     'img/b.png',  //index 1 ---> images[1]

// ];
// const firstImage = 0;
// const lastImage = images.length - 1;
// let currentImage = 0;
// //next
// const nextBtn = document.getElementById('next');
// nextBtn.addEventListener('click', () => {

//     //get image tag
//     const imageTag = document.getElementById('image');
//     currentImage++; //1
//     if (currentImage >= lastImage) {
//         currentImage = 1;
//     }

//     imageTag.src = images[currentImage];
//     document.getElementById('info').innerHTML = (currentImage + 1) + '/1';

// });
// //prev
// const preBtn = document.getElementById('prev');
// preBtn.addEventListener('click', () => {

//     //get image tag
//     const imageTag = document.getElementById('image');
//     currentImage--; //1
//     if (currentImage <= firstImage) {
//         currentImage = 0;
//     }

//     imageTag.src = images[currentImage];
//     document.getElementById('info').innerHTML = (currentImage + 1) + '/1';





// });

// const videoContainer = document.getElementsByClassName('video-container')[0];
// const buttonsContainer = document.getElementsByClassName('buttons')[0];
// const startButton = document.getElementById('start');
// startButton.addEventListener('click', () => {
//     if (startButton.innerText === 'Start Video') {
//        addVideo();
//     } 
//     else {
//         goBack();
//     }
// });

// function addVideo() {
//     const video = document.createElement('video');
//     video.src = '/img/Add a subheading (4).mp4';
//     video.autoplay = true;
//     video.controls = true;
//     buttonsContainer.style.display = 'none';
//     videoContainer.appendChild(video);
//     startButton.innerText = 'Go Back';
// }

// function goBack() {
//     videoContainer.style.display = "none";
//     buttonsContainer.style.display = "flex";
    // startButton.innerText = "Start Video";
// }
// Array of images
const images = [
    'img/a.png',
    'img/b.png',
];

let currentImage = 0;

// Elements
const imageTag = document.getElementById('image');
const infoTag = document.getElementById('info');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const videoContainer = document.querySelector('.video-container');
const buttonsContainer = document.querySelector('.buttons');
const startButton = document.getElementById('start');

// Initialize info tag and image source
function updateInfo() {
    infoTag.innerHTML = `${currentImage + 1} / ${images.length}`;
    imageTag.src = images[currentImage];
}

// Event listener for next button
nextBtn.addEventListener('click', () => {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    updateInfo();
});

// Event listener for prev button
prevBtn.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    updateInfo();
});

// Event listener for start button
startButton.addEventListener('click', () => {
    if (startButton.innerText === 'Animated Video') {
        addVideo();
    } else {
        goBack();
    }
});

function addVideo() {
    const video = document.createElement('video');
    video.src = 'img/Add a subheading (4).mp4';
    video.autoplay = true;
    video.controls = true;
    buttonsContainer.style.display = 'none';
    videoContainer.style.display = 'block';
    videoContainer.appendChild(video);
    startButton.innerText = 'Go Back';
}

function goBack() {
    const video = videoContainer.querySelector('video');
    video.pause();
    videoContainer.style.display = 'none';
    buttonsContainer.style.display = 'flex';
    startButton.innerText = 'Animated Video';
}

// Initialize the info tag and image on page load
updateInfo();


