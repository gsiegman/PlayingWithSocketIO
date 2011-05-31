function msgReceived(msg){
    console.log(eval("(" + msg + ")"));
    var data = eval("(" + msg + ")");
    $color_span.html(data.color);
    $("body").css("background-color", data.color);
}

$(document).ready(function(){
    $color_span = $("#color");
    
    var socket = new io.Socket(null, {port:3000});
    socket.connect();
    socket.on("message", function(msg){msgReceived(msg)});
});