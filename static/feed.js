function msgReceived(msg){
    console.log(eval("(" + msg + ")"));
    var data = eval("(" + msg + ")");
    $firstName.html(data.first_name);
    $lastName.html(data.last_name);
}

$(document).ready(function(){
    $firstName = $("#first_name");
    $lastName = $("#last_name");
    
    var socket = new io.Socket(null, {port:3000});
    socket.connect();
    socket.on("message", function(msg){msgReceived(msg)});
});