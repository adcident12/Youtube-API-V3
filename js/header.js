// @ts-nocheck
$( document ).ready(function() {
    $('.single-item').slick({
        dots: true,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
      var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('DD MMMM YYYY') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        $('#time-part').html(momentNow.format('hh:mm:ss A'));
    }, 100);
});