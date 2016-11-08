// window.onload = function onLoad() {
//     var circle = new ProgressBar.Circle('#progress', {
//         color: '#FCB03C',
//         duration: 3000,
//         easing: 'easeInOut'
//     });
//
//     circle.animate(1);
// };



var circle = new ProgressBar.Circle('#progress', {
    color: '#555',
    trailColor: '#eee',
    strokeWidth: 10,
    duration: 2500,
    easing: 'linear',
    text: {
        // Initial value for text.
        // Default: null
        value: '0%',

        // Class name for text element.
        // Default: 'progressbar-text'
        className: 'progressbar__label',

        // Inline CSS styles for the text element.
        // If you want to modify all CSS your self, set null to disable
        // all default styles.
        // If the style option contains values, container is automatically
        // set to position: relative. You can disable behavior this with
        // autoStyleContainer: false
        // If you specify anything in this object, none of the default styles
        // apply
        // Default: object speficied below
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#f00',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },

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
            to100slow();
        });

};

function to100slow() {

    circle.animate(1.0, {
        duration: 6000,
        easeing: 'easeOutExpo',
        step: updatePercentage
    });

};

function to100slow() {

    circle.animate(1.0, {
        duration: 6000,
        easeing: 'easeOutExpo',
        step: updatePercentage
    });

};

function to100fast() {

    circle.animate(1.0, {
        duration: 500,
        easing: 'easeOutExpo',
        step: updatePercentage
    });

};


function to99full() {

    circle.animate(0.99, {
        duration: 10000,
        step: updatePercentage
    });

};




$( document ).on( 'click', '.js-animate-start', function( e ) {
    to90();
    e.preventDefault();
});

$( document ).on( 'click', '.js-animate-end', function( e ) {
    to100fast();
    e.preventDefault();
});

$( document ).on( 'click', '.js-animate-start-full', function( e ) {
    to99full();
    e.preventDefault();
});

$( document ).on( 'click', '.js-reset', function( e ) {
    circle.set(0.0);
    circle.setText('0%');

    e.preventDefault();
});
