/**
 * Created by cadekeese on 1/23/17.
 */


/*function pathAnimate(array) {
 function subAnimate(selector, time, callback) {
 let length = document.querySelector(selector).getTotalLength();

 $(selector)
 .css({
 'stroke-dasharray': length,
 "stroke-dashoffset": length
 })
 .animate({
 'stroke-dashoffset': 0
 }, time, function () {
 if (callback) {
 callback();
 }
 });
 }

 for (let i = 0; i < array.length; i++) {
 let current = array[i];
 subAnimate(current[0], current[1], current[2]);
 }
 }*/
function pathAll(selector, time, callback) {
    let classArray = [];
    $(selector + " path").each(function () {
        let theClass = 'pathAll' + Math.round(Math.random() * 10000);
        classArray.push('.' + theClass);
        $(this).addClass(theClass);
    });
    for (let x of classArray) {
        let path = document.querySelector(x);
        let length = path.getTotalLength();
        console.log(x, length);
        $(x)
            .css({
                'stroke-dasharray': length,
                "stroke-dashoffset": length
            })
            .animate({
                'stroke-dashoffset': 0
            }, time, function () {
                callback('done')
            });
        // setTimeout(callback, time, 'done');
    }


}
function animExit() {
    $('.landing').show();
    $('.splash').fadeOut();
    $('.intro').show();
    // Cookies.set('animation', 'true', {expires: .00001});
}
function exit() {
    $('.landing').show();
    $('.splash').hide();
    $('.intro').show();
}
if (!Cookies.get('animation')) {
    $(function () {
        $('.splash').show();
        pathAll('#svg2', 5000, animExit);
        Cookies.set('animation', 'true', {expires: 0.00347222222});
    });
} else {
    $(function () {
        exit();
    })
}

