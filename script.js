const express = require('express');
const bodyparser=require('body-parser')
const mysql = require('mysql');
const path = require('path');
const pug = require('pug');

const app = express();
app.use(express.static('../library'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.set('view engine','pug')

app.use(express.static(__dirname + '/'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "amoc"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});

app.listen(3000,()=>console.log('express opened'));

app.get('/', function (req,res) {
   res.sendFile(path.join(__dirname + '/login.html'));
}); 


app.post('/signup', function(req, res){
  //if you use body-parser, the user submitted form data will
  //be inside req.body
  console.log("data:", req.body);
  let sql = `INSERT INTO userinfo (email, name, admNo, year, division, password) VALUES('${req.body.email}', '${req.body.name}', '${req.body.adm}', '${req.body.year}', '${req.body.div}', '${req.body.pwd}')`;
  con.query(sql, function (err, rows, fields) {
    if (err){
      console.log(err);
    };
    console.log("1 record inserted");
    // console.log("the solution is:",rows[0].solution)
  });

  // res.send(req.body.email);
  res.render('index',{title:'data saved successfully',message:'data saved'})
});
 
