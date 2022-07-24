let imageData = JSON.parse(window.localStorage.getItem('image'));
console.log(imageData);

document.querySelector('.heading').innerText = imageData.alt_description;
document.querySelector('.artist').innerText = imageData.user.name;
document.querySelector('.tags').innerText = imageData.alt_description;

let img = document.createElement('img');

img.addEventListener('click', function() {
    console.log('image clicked');
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    let img = document.createElement('img');
    img.setAttribute('src', imageData.urls.thumb);
    let overlayContent = document.querySelector('.overlay-content');
    overlayContent.appendChild(img);
    let closeBtn = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', clearModal)
    overlay.addEventListener('click', clearModal)
})

function clearModal() {
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    let overlayContent = document.querySelector('.overlay-content');
    overlayContent.innerHTML = '';
}

img.setAttribute('src', imageData.urls.thumb);
document.getElementById('imageBg').appendChild(img);