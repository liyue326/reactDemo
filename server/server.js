const express = require('express');
const app = express();
const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/goodsList'
mongoose.connect(DB_URL, {
    useNewUrlParser: true
});
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})
const UserSchema = mongoose.model('goods', new mongoose.Schema({
    productId: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    }
    // 表的概念
}))
// User.create({
//     name: 'w11111',
//     age: 111
// },function(err,doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err)
//     }
// })



app.get('/', function (req, res) {
    UserSchema.find({
        productId: '201710004'
    }, function (err, docs) {
        if (!err) {
            console.log(docs)
            res.header("Access-Control-Allow-Origin","*");
            res.send(docs)
        }
    });


})
app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {
        res.json(doc)
        console.log(doc)
    })
    // res.json({
    //     name: '12eee',
    //     age: 12
    // })
})
app.listen(8081, function () {
    console.log('node app start at port 8081')
})