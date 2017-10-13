var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    nodemailer = require("nodemailer"),
    flash = require('connect-flash'),
    GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));


app.get("/", function(req, res){
    res.render("landing",{message:req.flash("success")});

});

app.post("/",function(req,res){


    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alderbeagle@gmail.com',
        pass: GMAIL_PASSWORD
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
        req.flash('success', 'Your message has been submitted');
        res.redirect('/');
      }
    });



})

app.listen(3000, function(){
   console.log("Simpul Server Has Started!");
});
