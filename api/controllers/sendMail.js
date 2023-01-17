var nodemailer = require('nodemailer');
exports.sendMail = (req,res,next) =>{
   let email =req.body.email
   let type = req.body.type
   let name = req.body.name
   let user_id
   let token
   if(req.body.user){
    user_id = req.body.user
   }
   if(req.body.token){
    token = req.body.token
   }
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'homestatenairobi@gmail.com',
    pass: 'MumLiam2018'
  }
});
let link;
let button_link;
let message;
let subject;
 
if(type == "verify"){
  subject = 'VERIFY YOUR EMAIL'
  link = "http://localhost:3000/verify/"+ email
  button_link= "Verify"
  message = `Thank you for registering with Homestate. Before we continue please verify your email address below. If you didn't create an account with <a href="http://localhost:3000">Homestate</a>, you can safely delete this email.`
}else if(type == "reset"){
  subject = 'RESET PASSWORD' 
  link = "http://localhost:3000/reset/"+token+"/"+user_id
  button_link= "Reset"
  message = `You recently requested to reset the password for your homestate account. Click the button below to proceed. If you did not make this request then please ignore this email. This password reset link is only valid for the next 20 minutes.`
 
}
 
let verify_template = `
<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Email Confirmation</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
/**
* Google webfonts. Recommended to include the .woff version for cross-client compatibility.
*/
@media screen {
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
}
}
/**
* Avoid browser level font resizing.
* 1. Windows Mobile
* 2. iOS / OSX
*/
body,
table,
td,
a {
-ms-text-size-adjust: 100%; /* 1 */
-webkit-text-size-adjust: 100%; /* 2 */
}
/**
* Remove extra space added to tables and cells in Outlook.
*/
table,
td {
mso-table-rspace: 0pt;
mso-table-lspace: 0pt;
}
/**
* Better fluid images in Internet Explorer.
*/
img {
-ms-interpolation-mode: bicubic;
}
/**
* Remove blue links for iOS devices.
*/
a[x-apple-data-detectors] {
font-family: inherit !important;
font-size: inherit !important;
font-weight: inherit !important;
line-height: inherit !important;
color: inherit !important;
text-decoration: none !important;
}
/**
* Fix centering issues in Android 4.4.
*/
div[style*="margin: 16px 0;"] {
margin: 0 !important;
}
body {
width: 100% !important;
height: 100% !important;
padding: 0 !important;
margin: 0 !important;
}
/**
* Collapse table borders to avoid space between cells.
*/
table {
border-collapse: collapse !important;
}
a {
color: #1a82e2;
}
img {
height: auto;
line-height: 100%;
text-decoration: none;
border: 0;
outline: none;
}
</style>

</head>
<body style="background-color: #e9ecef;"> 
 
<table border="0" cellpadding="0" cellspacing="0" width="100%">  
<tr>
  <td align="center" bgcolor="#e9ecef">
    <!--[if (gte mso 9)|(IE)]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
    <tr>
    <td align="center" valign="top" width="600">
    <![endif]-->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
      <tr>
        <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
          <h6 style="margin: 0; font-size: 20px; font-weight: normal; letter-spacing: -1px;">Hello ${name},</h6>
        </td>
      </tr>
    </table>
    <!--[if (gte mso 9)|(IE)]>
    </td>
    </tr>
    </table>
    <![endif]-->
  </td>
</tr> 
<tr>
  <td align="center" bgcolor="#e9ecef">
    <!--[if (gte mso 9)|(IE)]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
    <tr>
    <td align="center" valign="top" width="600">
    <![endif]-->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> 
      <tr>
        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
          <p style="margin: 0;">${message}</p>
        </td>
      </tr>  
      <tr>
        <td align="left" bgcolor="#ffffff">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                      <a href="${link}" target="_blank" style="display: inline-block; padding: 10px 20px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">${button_link}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr> 
      <tr>
        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
          <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
          <p style="margin: 0;"><a href="${link}" target="_blank">${link}</a></p>
        </td>
      </tr> 
      <tr>
        <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
          <p style="margin: 0;">Regards,<br> Homestate</p>
        </td>
      </tr> 

    </table>
    <!--[if (gte mso 9)|(IE)]>
    </td>
    </tr>
    </table>
    <![endif]-->
  </td>
</tr> 
<tr>
  <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
    <!--[if (gte mso 9)|(IE)]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
    <tr>
    <td align="center" valign="top" width="600">
    <![endif]-->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> 
      <tr>
        <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
          <p style="margin: 0;">You received this email because we received a request for user registration. If you create an account with Homestate you can safely delete this email.</p>
        </td>
      </tr> 
      <tr>
        <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
          <p style="margin: 0;">To stop receiving these emails, you can <a href="http://localhost:3000/" target="_blank">unsubscribe</a> at any time.</p>
          <p style="margin: 0;">12345, Nairobi,Kenya</p>
        </td>
      </tr> 

    </table>
    <!--[if (gte mso 9)|(IE)]>
    </td>
    </tr>
    </table>
    <![endif]-->
  </td>
</tr> 

</table> 

</body>
</html>` 
let htmltemplate = verify_template;
var mailOptions = {
  from: 'pmemoi2015@gmail.com',
  to: email,
  subject: subject,
  html: htmltemplate,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.send({
        status:"success",
        message:"Email sent successfully"
    }
          
    )
    // console.log('Email sent: ' + info.response);
  }
});
}