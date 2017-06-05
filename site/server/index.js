'use strict';
const express = require('express')
const app = express()
const path = require("path");

const nodemailer = require('nodemailer');
const pickupTransport = require('nodemailer-pickup-transport');


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.post('/send-mail', function (req, res) {
  console.log(req.body)
  var transport = pickupTransport({
    directory: path.join(__dirname + '/temp/email')
  });

  let transporter = nodemailer.createTransport(transport);

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Кількість плит складає: ' + req.body.milimetr, // plain text body
    html: '<b>Hello world ?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error)
      return console.log(error);
    }

    res.send('Message %s sent: %s' + info.messageId + info.response)
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
});


app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
