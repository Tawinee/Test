// var express = require("express");
// var app = express();

// function pay(requeat,reaponse){
//     console.log("Hi");
//     reaponse.send("Phone number 0952969591<br> e-mail  fair.tawinee@gamil.com");


// }
// app.get("/",function(requeat,reaponse){
//     console.log("Hello");
//     reaponse.send("<h1><font color=red>NothinggFair</font></h1>");
// });
// app.get("/contact",pay)

// app.listen(5000);

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("www"));

app.post("/qrgen",function (requeat,reponse) {
    var text = requeat.body.text;
    var QRCode = require('qrcode');
    QRCode.toDataURL(text, function (err, url) {
        console.log(url);
        var output = "QR Code for " + text + "<br>";
        output += "<img src='" + url + "'>";
        reponse.send(output);
    })
});

//  app.get("/qrgen", function (requeat, reponse) {
//      var text = requeat.body.text;
//      var QRCode = require('qrcode');
//     QRCode.toDataURL(text, function (err, url) {
//         console.log(url);
//          var output = "QR Code for " + text + "<br>";
//          output += "<img src='" + url + "'>";
//          reponse.send(output);
//      })
//  });

app.listen(5000);