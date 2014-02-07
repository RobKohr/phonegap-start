var main = {};
$(document).ready(function(){
    var log = function(message){
        console.log(message);
        $('#console').prepend('<p>'+message+'</p>');
    }
    
    $('#main').bind('touchstart touchmove touchend', function (event) { updateFinger(event); });
    var updateFinger = function(e)
    {
        e.preventDefault();
        fingerX = e.touches[0].pageX;
        fingerY = e.touches[0].pageY;
        alert(fingerX + ' ' + fingerY);
    }

    main.init = function(){
        main.touch_controls = touch_controls.init();
        log('main started');
        return main;
    }
    
    main.draw_square = function(){
        
    }
    main.init();
})

