
let androidImage = document.querySelector('.telegram__store-android');
let iosImage = document.querySelector('.telegram__store-ios');
let nextStep = document.querySelector('.next__step');
let radioName = document.querySelectorAll('.radio__name');
let radioInput = document.querySelector('.radio__input');

// Скрипт для детекции ОС
if(/Android/i.test(navigator.userAgent) ) {
    iosImage.classList.remove('ios');
    androidImage.classList.add('android');

}else if(/iPhone|iPad|iPod|/i.test(navigator.userAgent) ) {
    androidImage.classList.remove('Android');
    iosImage.classList.add('ios');
}








