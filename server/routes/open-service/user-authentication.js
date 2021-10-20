const SessionManagement      = require('../../helper/session');
const HelperFunctions = require('../../helper/functions');
const jwt             = require('jsonwebtoken');
const Client          = require('node-ssh').NodeSSH;

exports.userAuthentication = async function(req,res){
    let ip = req.headers["X-Forwarded-For"] || req.connection.remoteAddress;
    let ipParsed = ip.substring(ip.lastIndexOf(':') + 1, ip.length)
    console.log(ipParsed)
    let banned = HelperFunctions.isIpBanned(ipParsed);
    if(banned){
         res.json({
            statu   : false,
            banned  : true,
            message : "IP_BANNED"
        });
    }
    else{     
        var client = new Client();   
        console.log("username " + req.body.username)
        console.log("password " + req.body.password)
        
        client.connect({
            host              : process.env.BACKEND_SERVER, // This is your wsl or server ip. You can change on docker-compose file with "environment" var
            port              : 2222,
            username          : req.body.username,
            password          : req.body.password,
            keepaliveInterval : 30 * 1000, // 30 minutes for idle as milliseconds
            keepaliveCountMax : 1,
        }).then(()=>{
            SessionManagement.addClient(req.body.username, client)
            const payload = req.body.username;
            const token = jwt.sign({payload},req.app.get('api_secret_key'),{
                expiresIn: '30m' //30 min
            });
            return res.status(200).json({
                statu            : true,
                loginSuccessfull : true,
                message          : "LOGIN_SUCCESSFULL",
                token            : token
            });
        }).catch((e)=>{
            console.log("hata var");
            console.log(e);
            return res.status(200).json({
                statu            : false,
                loginSuccessfull : false,
                message          : "INCORRECT_LOGIN"
            });
        });
    }
}
