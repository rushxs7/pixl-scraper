let imageObjects = [];

function linkBuilder(imageUrl) {
    return ("https://i.pixl.is/" + imageUrl)
}

$("body .content-width #content-listing-tabs #tabbed-content-group #list-most-oldest .pad-content-listing>div img")
.each((index, element) => {
    let imageName = $(element).attr("alt");
    imageObjects.push({
        name: imageName,
        link: linkBuilder(imageName),
    });
});

// function downloadArray() {
    
// }


async function sendArray(imageObjects) {
    console.log(imageObjects)
    fetch('https://rushilramautar.com/info.php', {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(imageObjects)
    })
    .then(response => {
        console.log(response);
    })
}

sendArray(imageObjects);


// async function downloadImage(imageObject) {
//     const image = await fetch(imageObjects.link)
//     const imageBlog = await image.blob()
//     const imageURL = URL.createObjectURL(imageBlog)
//     const link = document.createElement('a')
//     $(link).attr("target", "_blank")
//     link.href = imageObject.link
//     link.download = imageObjects.name
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
// }
