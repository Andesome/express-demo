/**
 *  created by ling on 2017-12-28 13:45.
 */

let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var testRoute = express.Router();
testRoute.get('/:key',function (req,res) {
    console.log(req.params,req.query,req.body);
    res.cookie('name','3l_sir',{ maxAge:1000*60*60*24});
    res.send('hello world');
});
testRoute.get('/user/get_list',function (req,res) {
    console.log(req.params,req.query,req.body);
    // console.log('username',req.cookies);
    res.json({
        name:'lll',
        age:25,
        sex:'男',
    });
});
testRoute.get('/setName/:name',function (req,res) {
    console.log(req.params.name);
});
testRoute.post('/user/:action',function (req,res) {
    console.log('---',req.params,req.query,req.body);
    var body  = req.body;
    switch (req.params.action){
        case 'login':
            login(body,res);
            break;
        case 'register':
            register(body,res);
            break;
        case 'password':
            setPassword(body,res);
            break;
        default:
            return false;
    }
    // res.send('ok');
});


//登录
function login(date,res) {
    res.json({
        status:1,
        msg:"ok,login success"
    });
    console.log('登录',date)
}
//注册
function register(date,res) {
    res.json({
        status:1,
        msg:"ok,register success"
    });
    console.log('注册',date)
}
//设置密码
function setPassword(date,res) {
    res.json({
        status:1,
        msg:"ok,reset password success"
    });
    console.log('设置密码',date)
}



app.use('/test',testRoute);

app.listen(3000,function () {
    console.log("ok",3000);
});
