const btnMenu = document.querySelector('#btn-menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const mobile_menu = document.querySelector('.header__mobile-menu');
const menu_switch = document.querySelectorAll('#switch');

// SOLUTION 1
// btnMenu.addEventListener('click', function(){
//     console.log('open menu');
//     if (btnMenu.classList.contains('open')) {
//         btnMenu.classList.remove('open');
//     } else {
//         btnMenu.classList.add('open');
//     }

// });

// SOLUTION 2
// When clicked, change the open switch
btnMenu.addEventListener('click', function(){
    
    btnMenu.classList.toggle('open');
    body.classList.toggle('noscroll');
    menu_switch.forEach(function(element){
        element.classList.remove('hide');
    });
    
    if (btnMenu.classList.contains('open')) {
        // When clicked overly display
       
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        mobile_menu.classList.add('slide-in');
        mobile_menu.classList.remove('slide-out');
    }else {
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        mobile_menu.classList.add('slide-out');
        mobile_menu.classList.remove('slide-in');
        // Execute displayNone after the animation complete

        setTimeout(function(){
           menu_switch.forEach(function(element) {
               element.classList.add('hide');
           });
    }, 301);

    }
    

});

