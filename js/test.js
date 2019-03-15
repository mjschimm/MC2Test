var team = $('.team').offset().top;
$(window).scroll(function() {
    if (team - $(window).scrollTop() < 450) {
        $('.team-members').addClass('animate-team-members');
    }
})