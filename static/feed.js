function msgReceived(msg){
    console.log(eval("(" + msg + ")"));
    var data = eval("(" + msg + ")");
    $("body").append("<div>" + data.city + ", " + data.state + "</div>").css("background-color", data.color);
}

$(document).ready(function(){
    var socket = new io.Socket(null, {port:3000});
    socket.connect();
    socket.on("message", function(msg){msgReceived(msg)});
});