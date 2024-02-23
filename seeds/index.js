const mongoose = require('mongoose');
const cities = require('./cities');
const {descriptors,places} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log('MongoDBコネクションOK');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー');
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)]


const seedDB = async () => {
        await Campground.deleteMany({});  
        for(let i = 0; i <50; i++) {
            const randomCityIndex = Math.floor(Math.random() * cities.length);
            const price = Math.floor(Math.random() * 2000) + 1000;
            const camp = new Campground({
                location: `${cities[randomCityIndex].prefecture}${cities[randomCityIndex].city}`,
                title:`${sample(descriptors)}・${sample(places)}`,
                image: 'https://source.unsplash.com/collection/483251',
                description:"私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。私が先生と知り合いになったのは鎌倉である。その時私はまだ若々しい書生であった。暑中休暇を利用して海",
                price
            });
            await camp.save();
    }
}


seedDB().then(() => {
    mongoose.connection.close();
});