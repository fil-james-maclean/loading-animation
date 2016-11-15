$(document).ready(function(){

// With the element initially hidden, we can show it slowly:
function overlayFadeIn() {
  $( '.js-overlay' ).fadeIn( "slow" );
  $( 'html' ).addClass( 'no-scroll' );
};

function overlayFadeOut() {
  $( '.js-overlay' ).fadeOut( "slow" );
  $( 'html' ).removeClass( 'no-scroll' );
};


// function animateBar() {
//    var i = 0;
//    if i =< 99 {
//       var widthPercent = i + '%';
//       $( '.js-widthBar' ).css("width", widthPercent);
//       console.log(i);
//       var
//    }
//    for (i = 0; i < 100; i++) {
//
//
//         $( '.js-widthBar' ).css("width", widthPercent);
//         console.log(i);
//
//    };
//
// };

function simpleBarTo99() {
  $( '.js-widthBar' ).show().animate({
    width: "100%"
  }, 5000, function() {
    // Animation complete.
    // overlayFadeOut()
  });
};

console.log( 'hello in running');

var findProgressTxt = $(".loadingModal--processtext");

var progressUpdates = [
  "Checking your login details…",
  "Loading your account information…",
  "Fetching investment valuations…"
];

var progressUpdatesLen = progressUpdates.length - 1;

var intervalMs = 1000;

function textIncrementer() {

  console.log( 'inside textIncrementer');

  for(var i = 0; i < progressUpdatesLen; i++) {

    if ( i != progressUpdatesLen ) {

      setTimeout( function(){
        console.log( 'inside loop: ', i);
          findProgressTxt.html( progressUpdates[i] );
      }, intervalMs);

    } // close if statement

  } // close for loop

};


// function swaptxt( animationLength ) {
//   var animateProgressTxt = 0;
//   var findProgressTxt = $(".loadingModal--processtext");
//   var amountOfUpdates = progressUpdates.length - 1;
//   var swapInterval = ( animationLength / (amountOfUpdates + 1) );
//
//   function frame() {
//   animateProgressTxt++
//     findProgressTxt.innerHTML = progressUpdates[animateProgressTxt];
//
//     // console.log(animateProgressTxt + (progressUpdates[animateProgressTxt-1]));
//     // console.log(swapInterval);
//     if (animateProgressTxt == (amountOfUpdates)) {
//       clearInterval(id);
//       // console.log("done progresstxt");
//       //   console.log(animateProgressTxt + (progressUpdates[animateProgressTxt]));
//     };
//   };
//   var id = setInterval(frame, swapInterval);
// };


function jswidth(animationLength) {
  var animateWidth = 0;
  var findBar =  document.getElementById("bar-id");
  var findBarLable = document.getElementById("bar-lable-id");
  swaptxt(animationLength);
  function frame() {
    animateWidth++
    findBarLable.innerHTML = animateWidth + '%';
    findBar.style.width = animateWidth + '%';
    if (animateWidth == 100) {
      clearInterval(id);
      overlayFadeOut();
    }
  };
  var id = setInterval(frame, (animationLength/99) );
};

// function simpleBarTo99() {
//    setInterval(animateBar(), 1000);
// };

// var tweenable = new Tweenable();
//
// function simpleBarTo99() {
//   tweenable.tween({
//     from:     { 'x': 0  },
//     to:       { 'x': 100 },
//     duration: 8000,
//     step: function (state) {
//       widthBar.HTMLelement.style(width="x"+'%');
//     },
//     finish: function (state) {
//       console.log("width done " + "x")
//     }
//   });
//
// };


var circle = new ProgressBar.Circle('.js-loadingModal--circle', {
    color: '#006193',
    trailColor: '#d9d9d9',
    strokeWidth: 6,
    duration: 2500,
    easing: 'linear',
    text: {
        // Initial value for text.
        // Default: null
        value: '0%',

        // Class name for text element.
        // Default: 'progressbar-text'
        className: 'loadingModal--label',

        // Inline CSS styles for the text element.
        // If you want to modify all CSS your self, set null to disable
        // all default styles.
        // If the style option contains values, container is automatically
        // set to position: relative. You can disable behavior this with
        // autoStyleContainer: false
        // If you specify anything in this object, none of the default styles
        // apply
        // Default: object speficied below
        style: null,

        // Only effective if the text.style is not null
        // By default position: relative is applied to container if text
        // is set. Setting this to false disables that feature.
        autoStyleContainer: true,

        // Only effective if the shape is SemiCircle.
        // If true, baseline for text is aligned with bottom of
        // the SVG canvas. If false, bottom line of SVG canvas
        // is in the center of text.
        // Default: true
        alignToBottom: true
    }
});

function numToPercentage(r) {
    return  Math.round(r * 100) + '%';
};

var updatePercentage = function(){
    circle.setText( numToPercentage( circle.value() ) );
}


function to90() {

    circle.animate(
        0.9, {
            duration: 7000,
            step: updatePercentage
        }, function() {
            to99slow();
        });

};

function to99slow() {

    circle.animate(0.99, {
        duration: 6000,
        easeing: 'easeOutExpo',
        step: updatePercentage
    });

};

function to99slow() {

    circle.animate(0.99, {
        duration: 6000,
        easeing: 'easeOutExpo',
        step: updatePercentage
    });

};

function to100fast() {

    circle.animate(1.0, {
        duration: 800,
        easing: 'easeOutExpo',
        step: updatePercentage
    }, function() {
      bgAfter();
      window.scrollTo(0, 0);
      overlayFadeOut();
    });

};


function to97full() {

    circle.animate(0.97, {
        duration: 10000,
        step: updatePercentage
    });

};



function bgAfter() {
  $('.wrap').addClass('bg-after-img');
  $('.wrap').removeClass('bg-before-img');
};

function bgBefore() {
  $('.wrap').addClass('bg-before-img');
  $('.wrap').removeClass('bg-after-img');
};

$( document ).on( 'click', '.js-animate-bar-width', function( e ) {
    // simpleBarTo99()
    jswidth(8000);
    e.preventDefault();
});
$( document ).on( 'click', '.js-animate-overlay-in', function( e ) {
    overlayFadeIn();

    setTimeout( function(){
      textIncrementer();
    }, 2000);

    e.preventDefault();
});

$( document ).on( 'click', '.js-animate-overlay-out', function( e ) {
    overlayFadeOut();
    e.preventDefault();
});

$( document ).on( 'click', '.js-animate-start', function( e ) {
    to90();
    e.preventDefault();
});

$( document ).on( 'click', '.js-animate-end', function( e ) {
    to100fast();
    e.preventDefault();
});

$( document ).on( 'click', '.js-animate-start-full', function( e ) {
    to97full();
    e.preventDefault();
});

$( document ).on( 'click', '.js-reset', function( e ) {
    circle.set(0.0);
    circle.setText('0%');
    bgBefore();
    $( '.js-widthBar' ).width("10%");
    e.preventDefault();
});

}); // close doc ready
