const express = require('express');
const bodyparser=require('body-parser')
const mysql = require('mysql');
const path = require('path');
const pug = require('pug');
var http = require("http");
   // response, // You want your response code.
    //callback;
var _ = require('underscore');


const app = express();
app.use(express.static(__dirname+'../normaljs.js'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.set('view engine','pug')

app.use(express.static(__dirname + '/'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "amoc"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


});
var q;

app.listen(3000,()=>console.log('express opened'));

app.get('/', function (req,res) {
   res.sendFile(path.join(__dirname + '/login.html'));
});
/*callback = function (res) {
  response = res;
  console.log(response); // Here `response` will return an object.
}

console.log(response); // But here, even if code is written after `http.get`, `response ` will return `undefined` because response is used before the callback (same as callback of `addEventListener`) was called.
*/




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
 
app.post('/login', function(req, res){
  //if you use body-parser, the user submitted form data will
  //be inside req.body

  console.log("data:", req.body);
  let sql2 = `SELECT admNo,password,year,division from USERINFO where email='${req.body.email}'`;
  con.query(sql2, function (err, rows, fields) {
    if (err){
      console.log(err);
    };
  

  


var p=req.body.pwd;
q=rows[0].admNo;

    //console.log(result);
    console.log("Data recieved.");
console.log("password:",rows[0].password);
if(p==rows[0].password){

    console.log("Year:",rows[0].year);
    console.log("Admission Number:",rows[0].admNo);
   
    console.log("division:",rows[0].division);
     // res.render('index',{title:'data outputed successfully',message:'Data recieved'})

}
else 
{
      console.log("Input correct credentials")
        res.render('index',{title:'data outputed successfully',message:'Input correct credentials.Please go back'})

}
    //if(rows[0].year==null){
      //    console.log("Input correct credentials")
    //}
    if(rows[0].year==1){
      /*
http.createServer(function(req, res) {
  res.writeHead(301,{Location: '/table.html'});
  res.end();
}).listen(8888);
                      */

                     res.redirect('/table.html');     
    }
    //Object.keys(result).forEach(function(key) {
    //  var row = result[key];
     // console.log(row.name)
    });
    // console.log("the solution is:",rows[0].solution)
  


/*
  let sql3 = `SELECT year,division from USERINFO where email='${req.body.email}' or password='${req.body.pwd}'`;
  //`INSERT INTO userinfo (email, name, admNo, year, division, password) VALUES('${req.body.email}', '${req.body.name}', '${req.body.adm}', '${req.body.year}', '${req.body.div}', '${req.body.pwd}')`;
  con.query(sql2, function (err, result) {
    if (err){
      console.log(err);
    };
    console.log("Input correct credentials")
    // console.log("the solution is:",rows[0].solution)
  });
*/
  // res.send(req.body.email);
});

app.post('/save',function(req,res){
  console.log("data:", req.body);
  let t=1;

  for(var key in req.body) {
console.log(key);  
let sql6=`SELECT * from attendence where admNo='${q}'`;


  

let sql4=`UPDATE attendence set `+key+`='${req.body[key]}' where admNo='${q}'`; 
let sql5=`UPDATE tot_class1 set ` +key+`='${req.body[key]}' where admNo='${q}'`;         
//let sql4=`UPDATE attendence set em=ifnull('${req.body.em}',0), workshop=ifnull(${req.body.workshop},0),epc='${req.body.epc}',pmn='${req.body.pmn}',mathsII='${req.body.math}',pracem='${req.body.pracem}',pracfcp='${req.body.pracfcp}' where admNo='${q}'`;

//let sql4=`UPDATE attendence set em='${req.body.em}',epc='${req.body.epc}',pmn='${req.body.pmn}',mathsII='${req.body.math}',pracem='${req.body.pracem}',pracfcp='${req.body.pracfcp}' where admNo='${q}'`;

con.query(sql6,function(err,rows,fields){
if(err){
        console.log(err);

      }
  //  let value = req.body[key];
//value=rows[0](1);
let contents = [];
  rows.forEach(function(elem) {
    contents.push(_.toArray(elem));
  });
  let Value = contents[0][t]; //3rd column of 4th row.

t++;

      console.log("Data:",Value);
      

});
/*
con.query(sql4,function(err,rows,fields){
if(err){
        console.log(err);

      }
      console.log("Data recieved.");

});


con.query(sql5,function(err,rows,fields){
if(err){
        console.log(err);

      }
      console.log("Data recieved.");

});*/        
 }
              res.render('index',{title:'attendence saved successfully',message:'ur attendenceis saved'})


});