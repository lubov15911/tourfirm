
var Q = require('q'); // предпочитаю работать с промисами а не колбеками
var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');
var emailTemplates = require('email-templates');


//var transport = nodemailer.createTransport(
//    smtpTransport({
//        service: 'gmail',
//        auth: {
//            user: 'my.account@gmail.com',
//            pass: '123123'
//        }
//    })
//);
//
//var params = {
//    from: 'my.account@gmail.com',
//    to: 'lubov15911@gmail.com',
//    subject: 'Hi, body!',
//    text: 'Let\'s read some articles on Web Creation'
//};
//transport.sendMail(params, function (err, res) {
//    if (err) {
//        console.error(err);
//    }
//});
//
//var tpl;
//var emailTplsDir = 'email-temp';
//emailTemplates(emailTplsDir, function (err, template) {
//    if (err) {
//        console.error(err);
//    } else {
//        tpl = template;
//    }
//});
//
//var tplName = 'my-template-name';
//var locals = {user: 'Alex'};
//template(tplName, locals, function (err, html, text) {
//    if (err) {
//        console.error(err);
//    }
//    // html - то что будем дальше отправлять в письме
//});
//

//var Q = require('q'); // предпочитаю работать с промисами а не колбеками
//var nodemailer = require('nodemailer');
//var emailTemplates = require('email-templates');
//var smtpTransport = require('nodemailer-smtp-transport');
//
module.exports = {
    _transport: null,
    _template: null,

    // инициализируем наш mailer component
    init: function (config) {
        var d = Q.defer();

        // инициализация шаблонизатора
        emailTemplates(config.emailTplsDir, function (err, template) {
            if (err) {
                console.error(err);
                return d.reject(err);
            }

            this._template = template;
            // инициализация mailer’а
            this._transport = nodemailer.createTransport(
                smtpTransport({
                    service: config.service,
                    auth: config.auth
                })
            );
            d.resolve();
        }.bind(this));

        return d.promise;
    },

    // отправка обычного e-mail
    sendMail: function (from, to, subject, text, html) {
        var d = Q.defer();
        var params = {
            from: from, // адрес отправителя
            to: to, // список получателей через запятую
            subject: subject,
            text: text
        };

        if (html) {
            params.html = html;
        }

        this._transport.sendMail(params, function (err, res) {
            if (err) {
                console.error(err);
                d.reject(err);
            } else {
                d.resolve(res);
            }
        });

        return d.promise;
    },

    // отправка e-mail с шаблоном
    sendMailTemplate: function (from, to, subject, tplName, locals) {
        var d = Q.defer();

        this._template(tplName, locals, function (err, html, text) {
            if (err) {
                console.error(err);
                return d.reject(err);
            }

            this.sendMail(from, to, subject, text, html)
                .then(function (res) {
                    d.resolve(res);
                });
        }.bind(this));

        return d.promise;
    }
};