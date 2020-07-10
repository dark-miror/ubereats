$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("midle")
        }
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("midle")
            } else {
                $(scrollDiv).fadeIn("midle")
            }
        });
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "midle")
        })
    }
});
$(function() {
    $("#toTop").scrollToTop();
});


let body = document.querySelector('body');
body.classList.add('touch');
let arrow = document.querySelectorAll('.arrow');
for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];
    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', function() {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
    });
}