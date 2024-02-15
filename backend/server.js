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

//Exemple: /getProduct?vTrie=value&auteur=value&category=value&search=value
app.get('/getProduct', (req, res) => {

    var { title ,author, category, search,vTrie } = req.query;
    
    var partTarget = '';
    var partSearch = '';

    function addToPartTarget(column,value,partTarget){

        if(partTarget != ''){
            partTarget += 'AND '
        }
        partTarget += column + " = '" + value + "' ";

        return partTarget
    }
    function addToPartSearch(column,value,partSearch){
        if(partSearch != ''){
            partSearch += 'OR '
        }
        partSearch += column + " LIKE '%" + value + "%' ";

        return partSearch
    }

    if(title){
        partTarget = addToPartTarget('product_name',title,partTarget);
    }
    else{
        partSearch = addToPartSearch('product_name',search,partSearch)
    }

    if(author){
        partTarget = addToPartTarget('product_author',author,partTarget);
    }
    else{
        partSearch = addToPartSearch('product_author',search,partSearch)
    }

    if(category){
        partTarget = addToPartTarget('product_category',category,partTarget);
    }
    else{
        partSearch = addToPartSearch('product_category',search,partSearch)
    }

    var sql = "SELECT * FROM bookish_product WHERE " + partTarget;
    if(partSearch != ''){
        sql += "AND (" + partSearch + ")"
    }

    console.log(sql);
    db.query(sql, [title,author,category], (err, data) => {
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



