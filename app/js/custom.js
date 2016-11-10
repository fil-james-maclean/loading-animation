// With the element initially hidden, we can show it slowly:
function overlayFadeIn() {
  $( '.js-overlay' ).fadeIn( "slow" );
  $('html').addClass('no-scroll');
};

function overlayFadeOut() {
  $( '.js-overlay' ).fadeOut( "slow" );
  $('html').removeClass('no-scroll');
};



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

var progressUpdates = [
  "Checking your login details…",
  "Loading your account information…",
  "Fetching  investment valuations…"];

function bgAfter() {
  $('.wrap').addClass('bg-after-img');
  $('.wrap').removeClass('bg-before-img');
};

function bgBefore() {
  $('.wrap').addClass('bg-before-img');
  $('.wrap').removeClass('bg-after-img');
};


$( document ).on( 'click', '.js-animate-overlay-in', function( e ) {
    overlayFadeIn();
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
    e.preventDefault();
});
