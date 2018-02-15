'use strict';

function openNav() {
    document.getElementById('navSide').style.width = '250px';
}

function closeNav() {
    openNav();
    document.getElementById('navSide').style.width = '0';
}

$('document').ready(function() {
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    closeNav();
});
