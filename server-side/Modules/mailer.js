const nodemailer=require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

let config={
    service:'gmail',
    auth:{
        user:process.env.NODE_MAILER_USER,
        pass:process.env.NODE_MAILER_PASWORD
    }
}
const transporter = nodemailer.createTransport(config);


// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'Food Bite',
        link: 'https://foodbite.js/'
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
    }
});
const signup_email=()=>{
    var email = {
        body: {
            name: 'Folk',
            intro: 'Welcome to Food Bite, have your day with a tasy bite of our pizzas',
            action: {
                instructions: 'To get started with Food Bite, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Confirm your account',
                    link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };
    return email
}
const otp_email=(otp)=>{
    
        var email = {
            body: {
                name: 'Folk',
                intro: 'Your OTP for the reset password',
                action: {
                    instructions: 'To get started with Food Bite, please click here:',
                    button: {
                        color: '#22BC66', // Optional action button color
                        text: `${otp}`,
                        
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };
        return email;
     
}



// Generate an HTML email with the provided contents

module.exports ={transporter,mailGenerator,signup_email,otp_email};