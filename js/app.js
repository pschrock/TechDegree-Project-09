$('.navbar li').click(function(e) {
  //previous and current class names
  const previousSelected = '.' + $('.selected').html().toLowerCase();
  const currentSelected = '.' + $(e.target).html().toLowerCase();

  //remove 'selected' class from old, add to current
  $('.selected').removeClass('selected');
  $(e.target).addClass('selected');

  //remove previous and add current display
  if (currentSelected == '.home') {
    $('.overlay').show().animate({
      opacity: 1,
    }, 1000, () => {
      $(previousSelected).hide();
      $('.header-cont').show();
      $('.navbar').css('top','inherit')
        .css('margin-top','1em')
        .css('border-bottom','none');
      $('.overlay').animate({
        opacity: 0,
      }, 2000, () => {
        $('.overlay').hide();
      });
    });
  } else if (previousSelected == '.home') {
  $('.overlay').show().animate({
    opacity: 1,
  }, 1000, () => {
    $(currentSelected).show();
    $('.header-cont').hide();
    $('.navbar').css('top','0')
      .css('margin-top','0')
      .css('border-bottom','5px solid rgba(0, 0, 0, 0.5)');
    $('.overlay').animate({
      opacity: 0,
    }, 2000, () => {
      $('.overlay').hide();
    });
  });
  } else {
    $('.overlay').show().animate({
      opacity: 1,
    }, 1000, () => {
      $(previousSelected).hide();
      $(currentSelected).show();
      $('.header-cont').hide();
      $('.overlay').animate({
        opacity: 0,
      }, 2000, () => {
        $('.overlay').hide();
      });
    });
  }
});
