// Show the overlay then start the progress animation
function startprogressLoader() {

    setTimeout( function() {

        $( '.js-overlay' ).fadeIn( 250, function() {

            $( '.progressLoader').removeClass( 'is-right' );
            setTimeout(  function() {
                to90();
                animateDots();
                changeText(6000);
            }, 300 );

        } );
        // Class might not be needed
        $( 'html' ).addClass( 'no-scroll' );

    }, 150 );
};


function overlayFadeOut() {
    // Hides the overlay
    $( '.js-overlay' ).fadeOut( 250 );

    // A simulation of the photograph trasnitioning into the darker version
    $( '.bg-after-img' ).fadeIn( 250 );

    // A simulation of existing functionality with a more refined animation.
    $( '.bg-loginform-img' ).addClass( 'is-left' );
    $( '.bg-summary-img' ).removeClass( 'is-right' );

    // Class might not be needed
    $( 'html' ).removeClass( 'no-scroll' );

    // This is importaint, it kills a loop that will otherwise just keep going forever.
    dotsIsAnimating = false;
};


// Animates the dots
// If nothing else happens this will stop the app looking broken
// http://jsfiddle.net/Ty4gt/

var dotsIsAnimating = true;
function animateDots() {
    dotsIsAnimating = true;
    var dotCount = 0;

    function addDots(){
        if (dotsIsAnimating==true) {
            dotCount++;
            $('.js-progresstext--dots').text( new Array(dotCount % 5).join('.') );

            // importaint to know if this is still going
            // console.log("dot+");
        }
        else {
            clearInterval(dotId);
            dotCount = 0;

            // confirms this has stoped
            // console.log("dot STOP");
        }
    };

    var dotId = setInterval(addDots, 400 );
};

// This is a simulation of the backend changing the text.

function changeText(l) {
    var animateTxt = 0;
    var progressUpdates = [
        "Checking your login details",
        "Loading your account information",
        "Fetching investment valuations"
    ];
    var progressUpdatesLen = progressUpdates.length;
    var findProgressTxt = $(".js-progresstext--string");

    function frame() {
        animateTxt++

        findProgressTxt.text( progressUpdates[animateTxt-1] );
        if (animateTxt == progressUpdatesLen) {
            clearInterval(id);

        }
    };
    var id = setInterval(frame, l/progressUpdatesLen );
};

// In reality the text will change in response to a message from the back end.
function giveProgressUpdate(message) {
        $(".progresstext--string").text(message);
};


// a Simple bar width animation with no Jquery
function jswidth(animationLength) {
    var animateWidth = 0;
    var findBar =  document.getElementById("bar-id");
    var findBarLable = document.getElementById("bar-lable-id");
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


 Tweenable.setBezierFunction ( easeEnd, 0.770, 0.900, 0.815, 0.995) ;
var circle = new ProgressBar.Circle('.js-progressLoader--circle', {
    // filled color is blue1
    color: '#006193',
    // unfilled/background color is grey15
    trailColor: '#d9d9d9',
    // If greater than 6, will break in IE
    strokeWidth: 6,
    duration: 2500,
    easing: 'linear',
    text: {
        // Initial value for text.
        // Default: null
        value: '0',

        // Class name for text element.
        // Default: 'progressbar-text'
        className: 'progressLoader--percentage',

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
        alignToBottom: false
    }
});

// only whole numbers in the UI
var updatePercentage = function(){
    circle.setText( Math.round( circle.value() * 100) );
}

// First part of the animation
function to90() {

    circle.animate(
        0.9, {
            duration: 7000,
            step: updatePercentage
        }, function() {
            to99slow();
    });

};

// Second part of the animation has a slower speed
function to99slow() {

    circle.animate(0.99, {
        duration: 6000,
        easeing: 'easeOutExpo',
        step: updatePercentage
    });

};


// Advances the animation to the end.
// This should be done AFTER the UI for the next screen is ready
function endprogressLoader() {

    circle.animate(1.0, {
        duration: 800,
        easing: 'easeOutExpo',
        step: updatePercentage
    }, function() {

        window.scrollTo(0, 0);
        overlayFadeOut();
    });

};

// DEMO buttons simulation buttons other events

// Simple progress bar start
$( document ).on( 'click', '.js-animate-bar-width', function( e ) {
    // simpleBarTo99()
    jswidth(8000);
    animateDots();
    changeText(6000);
    e.preventDefault();
});

// simulates a sucsessful submission of the login form
$( document ).on( 'click', '.js-animate-start', function( e ) {
    startprogressLoader();
    e.preventDefault();
});

// simulates the account summary area ready
$( document ).on( 'click', '.js-animate-end', function( e ) {
    endprogressLoader();
    e.preventDefault();
});
