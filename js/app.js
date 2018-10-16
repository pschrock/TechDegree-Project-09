const quotes = [
  {
    quote: 'I am concerned that independent thought and critical thinking is waning in our modern world.',
    author: '-  Ken Jorgustin',
    source: 'https://modernsurvivalblog.com/modern-survival-ideology/leaders-and-their-blind-followers/'
  },
  {
    quote: 'If you tell the truth, you don’t have to remember anything',
    author: '-  Mark Twain',
    source: 'http://factmyth.com/factoids/if-you-tell-the-truth-you-dont-have-to-remember-anything/'
  },
  {
    quote: 'Always forgive your enemies; nothing annoys them so much.',
    author: '-  Oscar Wilde',
    source: 'http://www.lookupquotes.com/picture_quotes/always-forgive-your-enemies-nothing-annoys-them-so-much/41256/'
  },
  {
    quote: 'Only I can change my life. No one can do it for me.',
    author: '-  Carol Burnett',
    source: 'https://quotefancy.com/quote/757687/Carol-Burnett-Only-I-can-change-my-life-No-one-can-do-it-for-me'
  },
  {
    quote: 'Education is an atmosphere, a discipline, a life',
    author: '-  Charlotte Mason',
    source: 'https://www.azquotes.com/quote/732970'
  },
  {
    quote: 'Not all who wander are lost.',
    author: '-  J. R. R. Tolkien',
    source: 'https://quotefancy.com/quote/435328/J-R-R-Tolkien-Not-all-who-wander-are-lost'
  }
];

// for (i =  0; i<quotes.length; i+=1) {
//   $('.quote-wrap').animate({
//     opacity: 1,
//   }, 1000, () => {
//     $('.quote-wrap').animate({
//       opacity: 0,
//     }, 1000);
//     $('blockquote').attr('cite', quotes[i].source).text(quotes[i].quote);
//     $('cite').text(quotes[i].author);
//   })
// }
let windowWidthCalc = $(window).width();

const controller = new ScrollMagic.Controller();

// ScrollMagic - Navbar
const shrinkNavbar = new TweenMax.to('.navbar ul', .5, {padding: 0, background: '#263a50'});
const scene1 = new ScrollMagic.Scene({
  triggerElement: ".navbar", // point of execution
  duration: $('.main').height(), // pin element for the 'main' height
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('.navbar')
.setTween(shrinkNavbar)
.addTo(controller);

//ScrollMagic - About Heading Bounce
const bounceAboutImg = new TweenMax.from('.about .about-wrap-left', 1, {scale: 0.25, opacity: 0, ease:Bounce.easeOut});
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.about'
})
.setTween(bounceAboutImg)
.addTo(controller);

//ScrollMagic - About Heading Pinned
function aboutPinned(windowWidth) {
  if (windowWidth >= 1024) {
    const scene3 = new ScrollMagic.Scene({
      triggerElement: ".about-wrap-left", // point of execution
      duration: $('.about .about-wrap-right').height() - 400, // pin element for the 'main' height
      triggerHook: 0.15, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin('.about-wrap-left')
    .addTo(controller);
  }
}
aboutPinned(windowWidthCalc);

//ScrollMagic - Portfolio Heading Bounce
const bouncePrtfolioImg = new TweenMax.from('.portfolio .port-wrap-left', 1, {scale: 0.25, opacity: 0, ease:Bounce.easeOut});
const scene4 = new ScrollMagic.Scene({
  triggerElement: '.portfolio'
})
.setTween(bouncePrtfolioImg)
.addTo(controller);

//ScrollMagic - Portfolio Heading Pinned
function portfolioPinned(windowWidth) {
  if (windowWidth >= 1024) {
    const scene5 = new ScrollMagic.Scene({
      triggerElement: ".port-wrap-left", // point of execution
      duration: $('.portfolio .port-wrap-right').height() - 400, // pin element for the 'main' height
      triggerHook: 0.15, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin('.port-wrap-left')
    .addTo(controller);
  }
}
portfolioPinned(windowWidthCalc);

// ScrollMagic - Navigation to Pages
$('.navbar li').click(function(e) {
  const currentSelected = '.' + $(e.target).html().toLowerCase();

  if(currentSelected == '.home') {
    TweenMax.to(window, 1, {
      scrollTo:{
        y:currentSelected,
        offsetY: 225},
      ease:Power2.easeOut
    });
  } else {
    TweenMax.to(window, 1, {
      scrollTo:{
        y:currentSelected,
        offsetY:0},
      ease:Power2.easeOut
    });
  }
});

const cards = $('div.card');
for (i = 0; i<cards.length; i += 1){
  cards[i].addEventListener('mouseover', (e) => {
    if(e.bubbles) {
      const card = new TweenMax.to(cards[i]+'>div>.overlay', 1, {right: 0});
      const scene6 = new ScrollMagic.Scene({
        triggerElement: cards[i]+'>div>.overlay'
      })
      .setTween(card)
      .addTo(controller);
    }
  });
}


// scroll Bind to page
$(function() {
  $.scrollify({
     section : ".panel",
     // sectionName : "Home",
     easing: "easeOutExpo",
     scrollSpeed: 1100,
     touchScroll:true,
  });
});

// send Message - validates fields are not empty
$('#sendButton').click((e) => {
  if ($('#name').val() == "") {
    e.preventDefault();
    alert("Please input your name.");
  } else if ($('#email').val() == "") {
    e.preventDefault();
    alert("Please input an email to receive a reply.");
  } else if ($('#message').val() == "") {
    e.preventDefault();
    alert("Please input a message you would like to send.");
  } else {
    alert("Your message has been sent.");
  }
});
