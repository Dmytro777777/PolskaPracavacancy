// language script starts
const langPanel = document.getElementsByClassName("language-panel")[0];
function changeLang(e) {
    if (e.target.classList.contains('language-item-active') && e.target.classList.contains('language-item')){
        return
    }
    else if (e.target.classList.contains('language-item')){
        e.target.parentElement.firstElementChild.classList.remove("language-item-active");
        e.target.parentElement.lastElementChild.classList.remove("language-item-active");
        e.target.classList.add("language-item-active");
    }
}
langPanel.addEventListener('click', changeLang);
// language script ends

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// banner vacancies script

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var vacanciesSlider = document.querySelector(".vacancies-slider");

var timer = '';
vacanciesSlider.addEventListener("mouseout", function () {
    timer = setInterval(function () {
        plusSlides(1);
    }, 3000);
});
vacanciesSlider.addEventListener("mouseover", function () {
    clearInterval(timer);
    timer = null;
}, false);

// banner vacancies script ends

// show/hide search script starts

const advancedSearch = document.querySelector(".advanced-search-title");
const searchCriteria = document.querySelector(".search-criteria");
const workFor = document.querySelector(".work-for");
const fieldActivity = document.querySelector(".field-activity");
advancedSearch.addEventListener("click", function () {
searchCriteria.classList.toggle("vacancies-show");
workFor.classList.toggle("vacancies-show");
fieldActivity.classList.toggle("vacancies-show-inline");
});

// show/hide search script ends

// search period dropdown starts

const searchPeriod = document.querySelector(".search-period");
const periodDropdown = document.querySelector(".search-period-dropdown");
const dropdownItemCollection = document.getElementsByClassName('search-period-dropdown-item');
function showPeriodDropdown(e) {
    periodDropdown.style.display = 'block';
    e.stopPropagation();
}
function hidePeriodDropdown(e) {
    periodDropdown.style.display = 'none';
    e.stopPropagation();
}
function changePeriod(e) {
    if(e.target.classList.contains("search-period-dropdown-item")){
        for(var i = 0; i<dropdownItemCollection.length; i++){
            dropdownItemCollection[i].classList.remove("search-period-dropdown-item-active");
            e.target.classList.add('search-period-dropdown-item-active');
            let periodInner = e.target.innerHTML;
            periodDropdown.style.display = 'none';
            searchPeriod.firstElementChild.innerHTML = periodInner;
            e.stopPropagation();
        }
    }
}
searchPeriod.addEventListener("click", showPeriodDropdown);
periodDropdown.addEventListener("click", changePeriod);
document.addEventListener('click', hidePeriodDropdown);

// search period dropdown ends