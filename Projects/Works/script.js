document.getElementById('back').addEventListener('click', function() {
    console.log("clicked");
    scroll.scrollTo(0)
});


    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");

    elems.forEach(function(el) {
        el.addEventListener("mouseenter", function() {
            var bgimg = el.getAttribute("data-img");

            // Set the background image using url() around the path
            page2.style.backgroundImage = `url(${bgimg})`;
        });
    });

function loading() {
    var t1 = gsap.timeline()
    gsap.to("#yellow1", {
        top: "-100%",
        delay: 0.3,
        duration: 0.5,
        ease: "expo.out"
    })
    
    t1.from("#yellow2", {
        top: "100%",
        delay: 0.95,
        duration: 0.8,
        ease: "expo.out"
    }, "anim")
    t1.to("#loader h1", {
        delay: 0.9,
        color: "black"
    }, "anim")
    t1.to("#loader", {
        display: "none",
    })
    t1.to("#loader", {
        opacity: 0,
    })
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



const images = [
    { src: "NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "New Thumb", height: "200px" },
    { src: "nike-nfl-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Nike NFL Cover", height: "250px" },
    { src: "Nike-Studio-45-Desk_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Nike Studio Desk", height: "300px" },
    { src: "peloton-tread-1.5-b_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Peloton Tread", height: "220px" },
    { src: "public-cover2_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Public Cover", height: "270px" },
    { src: "Reebok-Split-From-Packaging-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Reebok Split", height: "230px" },
    { src: "Reshape-Identity-Logo-Blue_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Reshape Identity Logo Blue", height: "250px" },
    { src: "skky-thumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Skky Thumb", height: "240px" },
    { src: "thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Thumbnail 230526", height: "260px" },
    { src: "thumbnail_240320_185435_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Thumbnail 240320", height: "280px" },
    { src: "Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f (1).jpg", name: "Thumbnail (1)", height: "300px" },
    { src: "Thumbnail_New_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Thumbnail New", height: "220px" },
    { src: "v1.5-converse-bball-3_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Converse Bball", height: "210px" },
    { src: "v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Home Image 2", height: "250px" },
    { src: "versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Versace 1.5", height: "230px" },
    { src: "WØRKS_BetweenPlaces_Cover_240219_231911_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "WØRKS Between Places", height: "270px" },
    { src: "WØRKS_DeCaraAlSol_Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "WØRKS DeCara Al Sol", height: "280px" },
    { src: "WorksCoD_Shoes-sRGB-02_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Works CoD Shoes", height: "240px" },
    { src: "xi-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "XI 1.5", height: "250px" },
    { src: "amd-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "AMD V1.5", height: "260px" },
    { src: "Beyonce-Lion-King-The-Gift-Deluxe-Album-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Beyonce Lion King", height: "270px" },
    { src: "Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Call of Duty League", height: "300px" },
    { src: "Converse-Basketball-Identity-Shoe-Photgraphy_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Converse Basketball", height: "220px" },
    { src: "Cover_e49f8295ccc5a85e1a76e2d68c06456f (1).jpg", name: "Cover (1)", height: "250px" },
    { src: "Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Cover", height: "230px" },
    { src: "dreamhaus-1.5_240320_221305_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Dreamhaus 1.5", height: "280px" },
    { src: "fog-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Fog 1.5", height: "240px" },
    { src: "fog-pop-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Fog Pop V1.5", height: "270px" },
    { src: "freetoflow-v1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Free To Flow V1.5", height: "250px" },
    { src: "fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "FVV 1.5", height: "300px" },
    { src: "Guns-N-Roses-Pop-Up-Police-Car-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Guns N Roses Pop Up", height: "220px" },
    { src: "JACKIELEEPHOTO_090717_INSTITUTE-KITHSPORT-203255_201124_023510_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Jackie Lee Photo", height: "250px" },
    { src: "John-Elliot-Shows-Experiential-Photography-00_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "John Elliot Photography", height: "260px" },
    { src: "john-elliott-nepal-cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "John Elliott Nepal", height: "270px" },
    { src: "nars-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg", name: "Nars 1.5", height: "240px" }
];

function populateImageContainer(name, imageSrc, height) {
    const imageContainer = document.querySelector('.image-container');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-div');
    
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const pTag = document.createElement('p');
    pTag.innerHTML = name;
    
    overlay.appendChild(pTag);
    
    const imgTag = document.createElement('img');
    imgTag.src = `media/gallery/${imageSrc}`;
    imgTag.alt = name;
    imgTag.style.height = height; // Apply the custom height
    
    imageDiv.appendChild(overlay);
    imageDiv.appendChild(imgTag);
    
    imageContainer.appendChild(imageDiv);
}

// Generate content for each image in the list
images.forEach((image) => {
    populateImageContainer(image.name, image.src);
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back');

    backToTopButton.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});