if( window.WebSocket ){
    console.log("Web Sockets are supported");
    url ="ws://yoururl.extension:port";
    var ws = new WebSocket(url, [protocol]);

    //in order to send data to server
    ws.send("Message to server");

    //clsoing the socket
    ws.close();

    //a simple example
   
    ws.addEventListener('open', function(){
        console.log("Connection established using event");
    });
    ws.onopen = function(){
        console.log("Connection established using function");
    };
    ws.close();

	} else {
    console.log("Looks like you are using an old browser");
    }