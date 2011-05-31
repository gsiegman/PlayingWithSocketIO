function msgReceived(msg){
    console.log(eval("(" + msg + ")"));
    var data = eval("(" + msg + ")");
    var newColor = $("<div>" + data.city + ", " + data.state + "</div>");
    newColor.css("background-color", data.color);
    $("body").prepend(newColor);
}

$(document).ready(function(){
    var socket = new io.Socket(null, {port:3000});
    socket.connect();
    socket.on("message", function(msg){msgReceived(msg)});
});