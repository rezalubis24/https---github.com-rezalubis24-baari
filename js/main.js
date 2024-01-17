// Numerik Animation
let valueDisplays = document.querySelectorAll(".num");
let valueDisplays1 = document.querySelectorAll(".num1");
let interval = 5000;

valueDisplays1.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 4;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// header
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainHeader").style.top = "0";
    } else {
        document.getElementById("mainHeader").style.top = "-100px"; 
    }

    prevScrollpos = currentScrollPos;
};


// BAHASA
function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdownOptions");
    dropdownOptions.style.display = (dropdownOptions.style.display === "block") ? "none" : "block";
}

function selectOption(destination) {
    window.location.href = destination;
}

function rotateIcon() {
    var icon = document.querySelector('.icon');
    icon.classList.toggle('rotate');
}

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});


// scroll target
// Home | home
ScrollReveal().reveal('.home-text h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.home-text h2', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.home a', { delay: 100, origin: 'bottom' });


// Footer

ScrollReveal().reveal('.footer-des', { delay: 100, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('.footer-nav', { delay: 100, distance: '20px', origin: 'top' });
ScrollReveal().reveal('.footer-contact', { delay: 100, distance: '20px', origin: 'bottom' });


// ABOUT

// ABOUT || HOME

ScrollReveal().reveal('.home-about-text h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.home-about-text h2', { delay: 500, origin: 'bottom' });

// WHY US || HOME

ScrollReveal().reveal('.home-why-text h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.home-why-text h2', { delay: 500, origin: 'bottom' });

// Product || HOME

ScrollReveal().reveal('.home-product-text h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.home-product-text h2', { delay: 500, origin: 'bottom' });

// Contact || HOME

ScrollReveal().reveal('.home-contact-text h1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.home-contact-text h2', { delay: 500, origin: 'bottom' });



// REVEAL Kanan
window.addEventListener('scroll',revealR);

function revealR(){
    var reveals = document.querySelectorAll('.revealR');

    for(var i = 0 ; i < reveals.length; i++){
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
            
        }
    }
}

// REVEAL Kiri
window.addEventListener('scroll',revealL);

function revealL(){
    var reveals = document.querySelectorAll('.revealL');

    for(var i = 0 ; i < reveals.length; i++){
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
            
        }
    }
}

// REVEAL Bawah
window.addEventListener('scroll',revealB);

function revealB(){
    var reveals = document.querySelectorAll('.revealB');

    for(var i = 0 ; i < reveals.length; i++){
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
            
        }
    }
}

// REVEAL ATAS
window.addEventListener('scroll',revealT);

function revealT(){
    var reveals = document.querySelectorAll('.revealT');

    for(var i = 0 ; i < reveals.length; i++){
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
            
        }
    }
}



// Galeri

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.product-card img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


// MENU RESPONSIVE

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('.fa-bars');
    navbar.classList.toggle('active');
}