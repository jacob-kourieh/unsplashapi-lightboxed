let searchField = document.getElementById('search-field');


searchField.addEventListener('keyup', async(e) => {
    if (e.key === "Enter") {
        document.getElementById('images-container').innerHTML = '';
        let input = searchField.value;

        input == "" ? input = "plant" : input = input; //ternary statement
        // condition ? if true : if false
        let images = await getImages(input);
        console.log(images.results)
        updateUI(images.results);
    }
});

function updateUI(images) {
    //Uppdaterar UI't
    let imgsContainer = document.getElementById('images-container');
    //Loopa över alla bilder
    images.forEach(image => {
        //För varje bild -> skapa ett element med bild-rul som bkgrnd
        let img = document.createElement('figure');
        //När man klickar på bilden skall vi omdirigeras till bildens egen sida
        img.addEventListener('click', function() {
            goToImagePage(image);
        });
        img.setAttribute('class', 'thumbnail');
        img.style.backgroundImage = `url(${image.urls.thumb})`;
        imgsContainer.appendChild(img);
        console.log(image);
        let imgOverlay = document.createElement('article');
        imgOverlay.setAttribute('class', 'thumbnailContent');
        let imgOverlayContent = document.createElement('p');
        imgOverlayContent.innerText = image.alt_description;
        imgOverlay.appendChild(imgOverlayContent);
        img.appendChild(imgOverlay);

    });
}

function goToImagePage(imageObj) {
    console.log(imageObj);
    window.localStorage.setItem('image', JSON.stringify(imageObj));
    window.location.href = "imagePage.html";
}

async function getImages(input) {
    //gör fetch
    const key = '8f5cb789968ba70de1bf09bc1bf0aa979af568b6dd64a9a9c27758556041d409';

    //https://api.unsplash.com/photos/?client_id=YOUR_APPLICATION_ID

    try {
        let response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${input}&page=1&per_page=20`);
        let data = await response.json();
        return await data;
    } catch (err) {
        console.error(err);
    }
}


















// async function test() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Success!"), 1000)
//     })
//     let result = await promise;

//     alert(result);
// };

// test();