const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('photo'))
app.use(express.static('views'))

const products = [
    {
        name: "Мобільний телефон Apple iPhone 16 Pro 256GB Black Titanium",
        price: 49999,
        category: "Smartphones",
        brand: "Apple",
        rating: 4.9,
        in_stock: true,

    },
    {
        name: "ASUS VivoBook 15 X1502ZA-BQ110W Quiet Blue",
        price: 32999,
        category: "Laptops",
        brand: "ASUS",
        rating: 4.7,
        in_stock: true,

    },
    {
        name: "Samsung QE55Q60CAUXUA TV",
        price: 21999,
        category: "TVs",
        brand: "Samsung",
        rating: 4.8,
        in_stock: true,

    },
    {
        name: "Sony WH-1000XM4 Headphones Black",
        price: 10999,
        category: "Audio",
        brand: "Sony",
        rating: 4.6,
        in_stock: false,

    },
    {
        name: "LG F2J6HS2W Washing Machine",
        price: 14499,
        category: "Home Appliances",
        brand: "LG",
        rating: 4.8,
        in_stock: true,

    },
    {
        name: "Samsung RB34T600FSA/UA Refrigerator",
        price: 23999,
        category: "Home Appliances",
        brand: "Samsung",
        rating: 4.9,
        in_stock: true,

    }
];


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/user/:username',(req,res)=>{
    let data =  {username: req.params.username, hobbies:['RUST','frontend']}
    res.render(`user`, data)
})
app.get('/index', (req, res) => {
    let data = {
        navname: ['Головна', 'Акції', 'Про нас'],
        products: products
    };
    res.render('index', data);
});
app.get('/iphon', (req, res) => {

    res.render('iphon'); 
});













const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})
