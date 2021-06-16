const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const Item = require('./models/item');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/itemApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Oh no error");
        console.log(err);
    })

// seedDB();


// app.get('/',(req,res)=>{
//     res.render('index');
// })
app.get('/items', async (req, res) => {
    const items = await Item.find({});
    let newItem = [];
    items.forEach((item) => {

        item.last = Math.floor(Number(item.last));
        item.buy = Math.floor(Number(item.buy));
        item.sell = Math.floor(Number(item.sell));

        item.last = Number(item.last).toLocaleString();
        item.buy = Number(item.buy).toLocaleString();
        item.sell = Number(item.sell).toLocaleString();


        newItem.push(item);
    });
    // console.log(newItem);
    res.render('index', { items: newItem });
})


app.listen(3000, () => {
    console.log("server running at port 3000");
})