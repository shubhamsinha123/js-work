// CAROUSEL SCRIPTS
const gap = 16;
const carousel = document.getElementById("carousel");
console.log(carousel);
const  content = document.getElementById("content");
const  next = document.getElementById("next1");
const  prev = document.getElementById("prev1");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// MENU STICKY

window.onscroll = function() {
};

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;



// Slideshow Scripts 

var slideIndex = 0;
  showSlides();
  var slides,dots;

  

  function showSlides() {
      var i;
      slides = document.getElementsByClassName("mySlides");
      dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex> slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 8 seconds
  }
  
  function plusSlides(position) {
      slideIndex +=position;
      if (slideIndex> slides.length) {slideIndex = 1}
      else if(slideIndex<1){slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
  }
  
  function currentSlide(index) {
      if (index> slides.length) {index = 1}
      else if(index<1){index = slides.length}
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[index-1].style.display = "block";  
      dots[index-1].className += " active";
  }

// function showSlide2() {
//     var i;
//     slide1 = document.getElementsByClassName("row1");
//     dot1 = document.getElementsByClassName("dot1");
//     for (i = 0; i < slide1.length; i++) {
//        slide1[i].style.display = "none";  
//     }
//     slideIndexO++;
//     if (slideIndexO> slide1.length) {slideIndexO = 1}    
//     for (i = 0; i < dot1.length; i++) {
//         dot1[i].className = dot1[i].className.replace(" active", "");
//     }
//     slide1[slideIndexO-1].style.display = "block";  
//     dot1[slideIndexO-1].className += " active";
//     // setTimeout(showSlide2, 3000); // Change image every 8 seconds
// }

// function plusSlidesO(position) {
//     slideIndexO +=position;
//     if (slideIndexO> slide1.length) {slideIndexO = 1}
//     else if(slideIndexO<1){slideIndexO = slide1.length}
//     for (i = 0; i < slide1.length; i++) {
//        slide1[i].style.display = "none";  
//     }
//     for (i = 0; i < dot1.length; i++) {
//         dot1[i].className = dot1[i].className.replace(" active", "");
//     }
//     slide1[slideIndexO-1].style.display = "block";  
//     dot1[slideIndexO-1].className += " active";
// }

// function currentSlideO(index) {
//     if (index> slide1.length) {index = 1}
//     else if(index<1){index = slide1.length}
//     for (i = 0; i < slide1.length; i++) {
//        slide1[i].style.display = "none";  
//     }
//     for (i = 0; i < dot1.length; i++) {
//         dot1[i].className = dot1[i].className.replace(" active", "");
//     }
//     slide1[index-1].style.display = "block";  
//     dot1[index-1].className += " active";
//   }




// function openLink(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("row2");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }


var slideIndex2 = 1;
showside(slideIndex2);

function plus(n) {
    showside(slideIndex2 += n);
}

function current(n) {
    showside(slideIndex2 = n);
}

function showside(n) {
    var i;
    var slides = document.getElementsByClassName("row1");
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}

function openLink(evt, id) {
  const tabcontent = document.getElementsByClassName("row2");
  const tablinks = document.getElementsByClassName("tablinks");
  var i
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("default").click();
