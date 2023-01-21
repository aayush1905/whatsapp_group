var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><p>This is home Page of whatsapp group.</p></body></html>');
        res.end();

    }
    else if (req.url == "/loadmessage") {
        // making connection to database 'Test'
        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword"
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });

        // printing the messages
        function showMessage(str) {
            if (str == "") {
                document.getElementById("txtHint").innerHTML = "";
                return;
            }
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
            xhttp.open("GET", "getMessage.php?q=" + str);
            xhttp.send();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is whatsapp group chat.</p></body></html>');
        res.end();

    }
    else if (req.url == "/postMessage") {
        var message = prompt("Please enter the message");
        //taking the message as input and then storing it
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log(message);
        res.end();

    }
    else
        res.end('Invalid Request!');

});


server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')