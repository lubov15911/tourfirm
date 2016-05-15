var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = function(req, res, next) {


    var transporter = nodemailer.createTransport(smtpTransport({
        host:'smtp.gmail.com',
        secureConnection: true,
        port: 465,
        auth: {
            user: 'lubov15911@gmail.com',
            pass: '0608-k.,fbdfyjdf-1996'
        },
        tls:{
            secureProtocol: "TLSv1_method"
        }
    }));

    var mailOptions = {
        from: req.body.name + ' <' + req.body.email + '>', // sender address
        to: 'lubov15911@gmail.com', // list of receivers
        subject: req.body.title, // Subject line
        text: req.body.text, // plaintext body
        html: '<p><b>' + req.body.text + '</b></p>' +
            '<p>Обратный адрес: ' + req.body.email + '</p>'
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });


    return res.redirect('/');
}
