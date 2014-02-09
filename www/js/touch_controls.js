var touch_controls = {};
var tc = touch_controls;//alias
tc.init = function(config){
    return tc;
}

$(document).ready(function(){
    var log = function(message){
        $('#console').text(message);
    }
    
    $('#main').bind('touchstart touchmove touchend', function (event) { updateFinger(event); });
    var updateFinger = function(e)
    {
        e.preventDefault();
        var out = "c="+e.touches.length+' ';
        for(var i = 0; i<e.touches.length; i++){
            var fingerX = e.touches[i].pageX;
            var fingerY = e.touches[i].pageY;
        }

        $('.box').each(function(i){
            if(e.touches[i]){
                var fingerX = e.touches[i].pageX;
                var fingerY = e.touches[i].pageY;
                log(fingerX+','+fingerY);
                $(this).css('top', ''+fingerY+'px');
                $(this).css('left', ''+fingerX+'px');
            }else{
                $(this).css('top', 0+'px');
                $(this).css('left', 0+'px');
            }
        })

    }
})


