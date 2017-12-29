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
testRoute.post('/user/set_password',function (req,res) {
    console.log('密码',req.params,req.query,req.body);
    res.send('ok');
});



app.use('/test',testRoute);

app.listen(3000,function () {
    console.log("ok",3000);
});
