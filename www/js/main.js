var main = {};
$(document).ready(function(){
    var log = function(message){
        console.log(message);
        $('#console').prepend('<p>'+message+'</p>');
    }
    
    $('#main').bind('touchstart touchmove touchend', function (event) { updateFinger(event); });
    var updateFinger = function(e)
    {
        log('touch');
        e.preventDefault();
        var out = "c="+e.touches.length+' ';
        for(var i = 0; i<e.touches.length; i++){
            var fingerX = e.touches[i].pageX;
            var fingerY = e.touches[i].pageY;
        }

        $('.boxes').each(function(i){
            log('boxes');
            if(e.touches[i]){
                var fingerX = e.touches[i].pageX;
                var fingerY = e.touches[i].pageY;
                $(this).css('top', ''+fingerY+'px');
                $(this).css('left', ''+fingerX+'px');
            }else{
                $(this).css('top', 0+'px');
                $(this).css('left', 0+'px');
            }
            log('pos');
        })

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

