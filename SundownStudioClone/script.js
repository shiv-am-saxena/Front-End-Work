function preloading() {
    let preloader = document.querySelector('.preloader')
    setTimeout(function () {
        preloader.style.top = "-100%";
        // preloader.style.display = "none";
    }, 10000);
    setTimeout(function () {
        // preloader.style.top = "-100%";
        preloader.style.display = "none";
        // console.log("cghj");
    }, 10100);
}
preloading();
function smoothscroll(value) {
    const scroll = new LocomotiveScroll({
        el: document.querySelector(value),
        smooth: true
    });
}
let fixedBox = document.querySelector('.fixedWindow');
let fixedElem = document.querySelectorAll(".fixedElemBar");
// console.log(fixedElem)
function fixedStrips() {
    fixedElem.forEach(function (elem) {
        // console.log(elem.getAttribute("data-image"))
        elem.addEventListener("mouseenter", function () {
            fixedBox.style.display = "block";
            fixedBox.style.backgroundImage = `url(${elem.getAttribute('data-image')})`;
        })
        elem.addEventListener("mouseleave", function () {
            fixedBox.style.display = "none";

        })
    })
}
fixedStrips();
smoothscroll('#main')
// smoothscroll('img')

let headings = document.querySelectorAll('.banner-heading');
let para = document.querySelectorAll('.para');
let img = document.querySelector('.banner-img');
// console.log(img)
headings.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem == headings[0]) {
            img.setAttribute('src', elem.getAttribute('data-image'));
            para[0].style.display = "block";
            para[1].style.display = "none";
            para[2].style.display = "none";
            elem.style.borderColor = "#FE330A";
            elem.style.color = "#EFEAE3";
            headings[1].style.borderColor = "#504A45";
            headings[1].style.color = "#504A45";
            headings[2].style.borderColor = "#504A45";
            headings[2].style.color = "#504A45";
        }
        else if (elem == headings[1]) {
            img.setAttribute('src', elem.getAttribute('data-image'));
            para[1].style.display = "block";
            para[0].style.display = "none";
            para[2].style.display = "none";
            elem.style.borderColor = "#FE330A";
            elem.style.color = "#EFEAE3";
            headings[0].style.borderColor = "#504A45";
            headings[0].style.color = "#504A45";
            headings[2].style.borderColor = "#504A45";
            headings[2].style.color = "#504A45";
        }
        else {
            img.setAttribute('src', elem.getAttribute('data-image'));
            para[2].style.display = "block";
            para[0].style.display = "none";
            para[1].style.display = "none";
            elem.style.borderColor = "#FE330A";
            elem.style.color = "#EFEAE3";
            headings[0].style.borderColor = "#504A45";
            headings[0].style.color = "#504A45";
            headings[1].style.borderColor = "#504A45";
            headings[1].style.color = "#504A45";
        }
    })
})
function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      });
}
swiper();