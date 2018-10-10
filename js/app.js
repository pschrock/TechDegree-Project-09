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


const controller = new ScrollMagic.Controller();

const shrinkNavbar = new TweenMax.to('.navbar ul', .5, {padding: 0});
const scene1 = new ScrollMagic.Scene({
  triggerElement: ".navbar", // point of execution
  duration: $('.main').height(), // pin element for the 'main' height
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('.navbar')
.setTween(shrinkNavbar)
// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

const bounceImg = new TweenMax.from('.about .about-wrap-left', 1, {scale: 0.25, opacity: 0, ease:Bounce.easeOut});
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.about'
})
.setTween(bounceImg)
// .addIndicators({name: "1 (duration: 0)"})
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".about-wrap-left", // point of execution
  duration: $('.about .about-wrap-right').height() - 460, // pin element for the 'main' height
  triggerHook: 0.15, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('.about-wrap-left')
// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

// Scroll to
$('.navbar li').click(function(e) {
  const currentSelected = '.' + $(e.target).html().toLowerCase();

  TweenMax.to(window, 1, {
    scrollTo:{
      y:currentSelected,
      offsetY:0},
    ease:Power2.easeOut
  });
});


// scroll Bind to page

// let position = $('.wrap').scrollTop;
// const about = $('.about').offset();
// const portfolio = $('.portfolio').offset();
// const contact = $('.contact').offset();
// console.log(about);
// console.log(portfolio);
// console.log(contact);
// console.log(position);
