// >>>>l

// const { createElement } = require("react");



const accessKey = "5ZSFfCHj5S_Asx1gcY4OHgxuC2QHWRBTGuGlsrmbPJM";

const ImageName = document.getElementById("data");

const imgcontainer = document.querySelector(".images");

const btn = document.querySelector(".ShowMoreBtn");

// console.log(ImageName);

const search = document.querySelector(".search");


// console.log(search);


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = ImageName.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}}&query=${keyword}&per_page=12&client_id=${accessKey}`;

    const response = await fetch(url);



    const JsonResponse = await response.json();


    console.log(JsonResponse)


    const results = JsonResponse.results;


    results.map((result) => {


        const image = document.createElement("img");
        image.src = result.urls.small;

        const imglink = document.createElement("a");
        imglink.href = result.links.html;
        imglink.target = "_blank";

        imglink.appendChild(image);

        imgcontainer.appendChild(imglink);




    })


    btn.style.display = "block";






}

search.addEventListener("click", function (e) {


    e.preventDefault();

    if (imgcontainer.children.length > 0) {
        imgcontainer.innerHTML = "";
    }
    page = 1;
    searchImages()
})



btn.addEventListener("click", (e) => {

    page++;

    searchImages()
})

