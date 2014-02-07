var main = {};
$(document).ready(function(){
    var log = function(message){
        console.log(message);
        $('#console').prepend('<p>'+message+'</p>');
    }
    
    main.init = function(){
        main.touch_controls = touch_controls.init();
        log('main started');
        return main;
    }
    
    $('#main').bind('touchmove', function(event) {
        for (var i = 0; i < event.touches.length; i++) {
            var touch = event.touches[i];
            console.log(touch);
            log(JSON.stringify(touch));
        }
    }, false);    
    main.draw_square = function(){
        
    }
    main.init();
})

