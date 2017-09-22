$(document).ready(function () {

    resizeContent();

    $(window).resize(function() {
        resizeContent();
    });

    function resizeContent() {
        var cell_height = $('.cell').width();
        $('.cell').css({
            'height': cell_height
            //'background': 'width: '
        });
    }

    
    
});