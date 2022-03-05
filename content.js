// array to store all images with title and link
let imageArray = []


function linkBuilder(imageUrl)
{
    return ("https://i.pixl.is/" + imageUrl)
}

function addToImagesStorageVariable(link)
{
    if (localStorage.getItem("images") !== null) {
        let imageStorageArray = JSON.parse(localStorage.getItem("images"))
        imageStorageArray.push(link)
        localStorage.setItem("images", JSON.stringify(imageStorageArray))
    } else {
        localStorage.setItem("images", JSON.stringify([ link ]))
    }
}

$("body .content-width #content-listing-tabs #tabbed-content-group #list-most-oldest .pad-content-listing>div img")
    .each((index, element) => {
        let imageName = $(element).attr("alt")
        addToImagesStorageVariable(linkBuilder(imageName))
    });


// run these lines of code to output the storage variable to the console
// var linkArray = JSON.parse(localStorage.getItem("images"))
// var alertText = ''
// linkArray.forEach( (link) => { alertText += (link + '\n') } )
// console.log(alertText)