/**
 *  created by ling on 2017-12-22 15:13.
 */

//引入mongoose模块
var mongoose = require('mongoose');
//创建连接
var db = mongoose.createConnection("mongodb://127.0.0.1:27017/person");
mongoose.Promise = global.Promise;
//定义格式 => 表结构
var monSchema = new mongoose.Schema({
    name : {type:String, default:'test'},
    age : {type: Number}
});

//定义model 指定表名
var monModel = db.model('user', monSchema);

var mon = new monModel({name:'old_tagger',age:50});

const _filter = {'__v':0};

//执行插入
/*mon.save(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('insert ok');
        monModel.find({},_filter,function (err,doc) {
            if(err){
                console.log("错误信息",err);
                return;
            }
            console.log(doc)
        });
    }

    //关闭连接
    // db.close();

});*/

monModel.find({},_filter,function (err,doc) {
    if(err){
        console.log("错误信息",err);
        return;
    }
    console.log(doc);
});







