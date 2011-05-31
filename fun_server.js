var app = require("http").createServer();
var socket = require("socket.io").listen(app);
var redis = require("redis");

socket.on("connection", function(client){
  var rc = redis.createClient();
  rc.subscribe("foo");
  
  rc.on("message", function(channel, message) {
      console.log(message);
      client.send(message);
  });
  
  client.on("disconnect", function(){
      rc.quit();
  });
});


app.listen(3000);