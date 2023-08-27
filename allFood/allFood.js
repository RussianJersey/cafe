



/* Добавление по нажатию siteBar */
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// window.addEventListener('DOMContentLoaded', function (event) {
//     var btn1 = document.getElementById('bnt-choice1');
//     var btn2 = document.getElementById('bnt-choice2');

//     if (document.getElementById('bnt-choice1')) {
//         btn1.addEventListener("click", function () {
//             btn1.classList.add("active");
//             btn2.classList.add("stay");
//             console.log('work 1');
//         });
//     }
//     if (document.getElementById('bnt-choice2')) {
//         btn2.addEventListener("click", function () {
//             btn1.classList.add("stay");
//             btn2.classList.add("active");
//             console.log('work 2');
//         });
//     }
// });




// Счетчик для блюд
// window.addEventListener('click', function (event) {

//     let counter;

//     if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
//         const counterWrapper = event.target.closest('.counter-wrapper');
//         counter = counterWrapper.querySelector('[data-counter]');
//     }

//     if (event.target.dataset.action === 'plus') {
//         // счетчик до 100
//         if (parseInt(counter.innerText) < 100) {
//             counter.innerText = ++counter.innerText;
//         }
//     }

//     if (event.target.dataset.action === 'minus') {
//         if (parseInt(counter.innerText) > 1) {
//             counter.innerText = --counter.innerText;
//         }
//     }
// });






