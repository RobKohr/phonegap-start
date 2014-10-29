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
    var keystate = {};
    $(document).keydown(function(e){
	keystate[e.keyIdentifier] = true;
	if(['Up', 'Down', 'Left', 'Right'].indexOf(e.keyIdentifier)!=-1){
	    return false; //prevent keyboard scrolling
	}

    });
    $(document).keyup(function(e){
	keystate[e.keyIdentifier] = false;
	log(e.keyIdentifier);
	if(['Up', 'Down', 'Left', 'Right'].indexOf(e.keyIdentifier)!=-1){
	    return false; //prevent keyboard scrolling
	}
    });
    
    var in_frame = false;
    var last_in_frame = 0;
    var box = $('#box1');

    function frame(){
	var now = new Date().getTime();
	if(in_frame){
	    var elapsed = now - last_in_frame;
	    if(elapsed < 1000){
		return;
	    }
	}
	in_frame = true;
	last_in_frame = now;
	var adjustment = 1;
	var pos = box.offset();
	if(keystate['Up']){
	    pos.top = pos.top - adjustment;
	}
	if(keystate['Down']){
	    pos.top = pos.top + adjustment;
	}
	if(keystate['Left']){
	    pos.left = pos.left - adjustment;
	}
	if(keystate['Right']){
	    pos.left = pos.left + adjustment;
	}
	box.offset(pos);
	in_frame = false;
    }
    setInterval(frame, 10);

    main.init();
})

