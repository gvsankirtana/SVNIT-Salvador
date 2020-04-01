const express = require('express');
const bodyparser=require('body-parser')
const mysql = require('mysql');

const app = express();
app.use(express.static('../library'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.set('view engine','pug')




var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "mysql"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});
app.listen(3000,()=>console.log('express opened'));

app.get('/', function (req,res) {
   res.sendFile('login.html',{root:amoc});
}); 


app.post('/login.html', function(req, res){
  //if you use body-parser, the user submitted form data will
  //be inside req.body
  console.log("data:", req.body);
var sql = "INSERT INTO userinfo VALUES ('"+req.body.email+"','"+req.body.name+"','"+req.body.adm+"','"+req.body.year"','"+req.body.div+"','"+req.body.pwd+"')";
  con.query(sql, function (err, rows, fields) {
    if (err) throw err;
    console.log("1 record inserted");
    console.log("the solution is:",rows[0].solution)
  });

  res.send(html);
  res.render('index',{title:'data saved successfully',message:'data saved'})
});
 
con.end();
