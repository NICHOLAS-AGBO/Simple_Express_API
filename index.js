const express = require("express");
const app = express();
const helmet = require("helmet");
const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
    host: "dreamworld-company.com",
    port: 465,
    secure: true,
    auth: {
        user: "info@dreamworld-company.com",
        pass: "dreamwor222",
    },
});

app.use(helmet());
app.use(express.static('public'));
app.use(express.static('html',{
    extensions:['htm','html'],
    setHeaders: (res)=>{
        res.set('x-timestamp', `${Date.now()}`);
    }
}));

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'html/home.html'),(e)=>{
        if(e){
            res.status(404).send(`${e.message}`);
        }
    });
})

app.get('/mail',(req,res)=>{

    transporter.sendMail({
        from: '"Nicholas" <info@dreamworld-company.com>', // sender address
        to: "nnajichristabel54@gmail.com, agbonicholas3@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    }).then((msg)=>{
        res.status(200).json('Message sent'+msg.messageId);
    }).catch((err)=>{
        res.status(500).json('Message not sent');
        console.error(err);
    })

})
app.listen(3000,()=>{
    console.log("App listening on port 3000");
})