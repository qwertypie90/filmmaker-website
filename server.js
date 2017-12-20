var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/html-routes")(app);

app.listen(port, function() {
    console.log("Your site listening on: " + port);
});


/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "qwertypie91@gmail.com",
        pass: "Casting1$"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/contact',function(req,res){
    res.sendfile('contact.html');
});

app.post('/send',function(req,res){
    console.log('request::', req.body);
    var mailOptions={
        to : req.body.to,
        subject : req.body.subject,
        text : req.body.text
    }
    // console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + req.body);
        res.end("sent");
         }
});
});


/*--------------------Routing Over----------------------------*/