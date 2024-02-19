const express = require('express'); //expressをrequire
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log('MongoDBコネクションOK');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー');
        console.log(err);
    })

const app = express();


app.set('view engine', 'ejs');//テンプレートエンジンを使用
app.set('views',path.join(__dirname,'views')); //path指定の方法

app.get('/makecampground', async (req,res) => {
    const camp = new Campground({title: '私の庭',description: '気軽に安くキャンプ'});
    await camp.save();
    res.send(camp);
});

app.get('/', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中'); //
})