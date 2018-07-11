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

// change sing in and regisrtion form
const singinForm = document.getElementsByClassName("sing-in-form")[0];
const singinFormTitle = document.getElementsByClassName("sing-in-form-title")[0];
const regForm = document.getElementsByClassName("reg-form")[0];
const regFormTitle = document.getElementsByClassName("reg-form-title")[0];
const classActive = 'form-title-active';
singinFormTitle.addEventListener('click', function(){makeActive(this, regFormTitle, singinForm, regForm)});
regFormTitle.addEventListener('click', function(){makeActive(this, singinFormTitle, regForm, singinForm)});
function makeActive (currentTitle, otherTitle, currentForm, otherForm) {
    if(!(currentTitle.classList.contains(classActive))){
        currentTitle.classList.add(classActive);
        otherTitle.classList.remove(classActive);
        currentForm.style.display = 'block';
        otherForm.style.display = 'none';
    }else {
        return
    }
}