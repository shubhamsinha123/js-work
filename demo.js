var slideIndexO = 0;
  showSlide2();
  var slide1,dot1;

function showSlide2() {


    var i;
    slide1 = document.getElementsByClassName("row1");
    dot1 = document.getElementsByClassName("dot1");
    for (i = 0; i < slide1.length; i++) {
       slide1[i].style.display = "none";  
    }
    slideIndexO++;
    if (slideIndexO> slide1.length) {slideIndexO = 1}    
    for (i = 0; i < dot1.length; i++) {
        dot1[i].className = dot1[i].className.replace(" active", "");
    }
    slide1[slideIndexO-1].style.display = "block";  
    dot1[slideIndexO-1].className += " active";
    // setTimeout(showSlide2, 3000); // Change image every 8 seconds
}

function plusslide1(position) {
    slideIndexO +=position;
    if (slideIndexO> slide1.length) {slideIndexO = 1}
    else if(slideIndexO<1){slideIndexO = slide1.length}
    for (i = 0; i < slide1.length; i++) {
       slide1[i].style.display = "none";  
    }
    for (i = 0; i < dot1.length; i++) {
        dot1[i].className = dot1[i].className.replace(" active", "");
    }
    slide1[slideIndexO-1].style.display = "block";  
    dot1[slideIndexO-1].className += " active";
}

function currentSlide(index) {
    if (index> slide1.length) {index = 1}
    else if(index<1){index = slide1.length}
    for (i = 0; i < slide1.length; i++) {
       slide1[i].style.display = "none";  
    }
    for (i = 0; i < dot1.length; i++) {
        dot1[i].className = dot1[i].className.replace(" active", "");
    }
    slide1[index-1].style.display = "block";  
    dot1[index-1].className += " active";
  }