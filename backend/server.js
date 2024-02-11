const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookish"
})

app.get('/', (re,res) => {
    return res.json("From Backend Side");
})

/*app.get('/product/', (req,res) => {
    const sql = "SELECT * FROM bookish_product";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})*/

app.get('/product/:category', (req, res) => {
    const category = req.params.category;
    const sql = "SELECT * FROM bookish_product WHERE product_category = ?";
    db.query(sql, [category], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.json(data);
    });
});

app.get('/productSearch/:search', (req, res) => {
    const search = '%' + req.params.search + '%';
    const sql = "SELECT * FROM bookish_product WHERE product_category LIKE ? OR product_name LIKE ?";
    console.log(sql);
    db.query(sql, [search,search], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
})



