jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 600) {
            $('.btn').removeClass('btn-lg');
            $('.btn').addClass('btn-sm');
        } else if (ww >= 600) {
            $('.btn').removeClass('btn-sm');
            $('.btn').addClass('btn-lg');
        };
    };
    $(window).resize(function(){
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});