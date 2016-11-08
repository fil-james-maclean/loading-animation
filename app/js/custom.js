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
var updatePercentage = function(){
    circle.setText( numToPercentage( circle.value() ) );
}

function numToPercentage(r) {
    return Math.round(r * 100) + '%';
};


$( document ).on( 'click', '.js-animate-1', function( e ) {

    circle.animate(0.8, {
        duration: 7000,
        step: updatePercentage
    });

    e.preventDefault();
});


$( document ).on( 'click', '.js-animate-2', function( e ) {

    circle.animate(1.0, {
        duration: 10000,
        step: updatePercentage
    });

    e.preventDefault();
});


$( document ).on( 'click', '.js-animate-3', function( e ) {

    circle.animate(1.0, {
        duration: 250,
        step: updatePercentage
    });

    e.preventDefault();
});
