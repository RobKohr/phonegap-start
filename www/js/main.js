var main = {};
$(document).ready(function(){
    var log = function(message){
        console.log(message);
        $('#console').prepend('<p>'+message+'</p>');
    }
    
    main.init = function(){
        var touch_config = {
            show_fingers: true,
            controls:{
                p1:{type:'dpad', x:1,y:1}
            }
        }
        main.touch_controls = touch_controls.init();
        log('main started');
        return main;
    }

    $(document).keydown(function(e){
	log(e.keyCode);
    });

    main.init();
})

