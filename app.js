var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var xoauth2 = require("xoauth2");
var GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.render("landing");
    
});

app.post("/send",function(req,res){

    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alderbeagle@gmail.com',
        pass: GMAIL_PASSWORD || 'Alderbeagle2017'
      }
    });
    
    var mailOptions = {
      from: 'simpulweds@gmail.com',
      to: 'simpulweds@gmail.com',
      subject: 'Form',
      html: '<b>Name : </b>'+req.body.name +
            '<br><b>Email : </b>'+req.body.email +
            '<br><b>Country : </b>'+req.body.country +
            '<br><b>Message : </b>'+req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send("Submitted");
        res.redirect("/");
      }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Simpul Server Has Started!");
});