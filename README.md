#  🏫 SVNIT-Salvador 🏫 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

An Exemplary Website  👩🏻‍💻  created by team Trojan Hex to Solve basic issues of all SVNIT students by giving them Updates about the 

*  📈 Registered Student's daily Attendance 📉  
* 📺  New Upcoming Events  📺 
*  📃 To-do list 📃 
* 📅 Calender events 📅

## Table of contents 📝 
* [Illustration](#illustration)
* [Technologies](#technologies)
* [Setup](#setup)
* [Sources](#sources)
* [Authors](#authors)

## Illustration


## Technologies✔️
⌨️**FRONTEND**🖱
* **HTML 5**

* **CSS 3**

* **Bootstrap 3 or 4**

* **Javascript**

 🔙 **BACKEND** 🔚 

* **MYSQL 2.18**

* **Node.js**

* **Express.js 4.17**

* **PUG**


## Setup 🖥 

To run this project,install it locally using npm

```
$ npm install
$ npm start
$ npm init
```

To download the packages

[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![npm version](https://badge.fury.io/js/mysql.svg)](https://badge.fury.io/js/mysql)
[![npm version](https://badge.fury.io/js/body-parser.svg)](https://badge.fury.io/js/body-parser)
[![npm version](https://badge.fury.io/js/pug.svg)](https://badge.fury.io/js/pug)

```
$ npm init
$ npm install express
$ npm install mysql
$ npm install pug
$ npm install body-parser
$ npm install nodemon
$ npm install mssql
```

To execute the node.js code

[![npm version](https://badge.fury.io/js/nodemon.svg)](https://badge.fury.io/js/nodemon)

```
$ node script.js
```
You can also clone or download the source

```
https://github.com/geek-2002/SVNIT-Salvador.git

```

## Backend Database
```
mysql> select*from userinfo
```

| email                  | name           | admNo    | year  | division | password  |
| -----------------------| ---------------|----------|-------|----------|-----------|
| kumar@gmail.com        | Kumar          |U17cs067  | 3     | a        | hgvu      |
| mary@gmail.com         | Mary           |U19cs086  | 1     | d        | jhj       |
| krithikhabala@gmail.com| Krithikha Bala |U19cs076  | 1     | d        | krithi24  |
| mahitha@gmail.com      | Mahitha        |U19cs066  | 1     | d        | kkugy     |
| kiran@gmail.com        | Kiran          |U18me034  | 2     | a        | jugi7     |
| mario@gmail.com        | Mario          |U18ch003  | 2     | j        | nhukp     |
| sunil@gmail.com        | Sunil          |U17me078  | 3     | a        | kblll     |
| mohan@gmail.com        | Mohan          |U19cs065  | 1     | d        | jugi      |

```
8 rows in set(0.01 sec)
```
TO-DO-List Database
```
mysql> select*from todo
```

| admNo   | content               |
| --------| ----------------------|
|U17cs067 | maths assignment      |
|U19cs086 | mechanics test        |
|U19cs076 | practical record book |
|U19cs066 | maths test            |
|U18me034 | have to buy notebooks |
|U18ch003 | solids test           |
|U17me078 | ED homework           |
|U19cs065 | workshop record       |

```
8 rows in set(0.01 sec)
```

First year Attendance database 
```
mysql> desc attendence
```
|  Field          | Type        | NULL  | key  | Default | Extra  |
| ----------------|-------------|-------|------|---------|--------|
|  admNo          | varchar(10) | Yes   |      | NULL    |        |
|  em             | int(3)      | Yes   |      | 0       |        |
|  pmn            | int(3)      | Yes   |      | 0       |        |
|  epc            | int(3)      | Yes   |      | 0       |        |
|  fcp            | int(3)      | Yes   |      | 0       |        |
|  mathsII        | int(3)      | Yes   |      | 0       |        |
|  pracfcp        | int(3)      | Yes   |      | 0       |        |
|  pracem         | int(3)      | Yes   |      | 0       |        |
|  brsp           | int(3)      | Yes   |      | 0       |        |
|  pracbrsp       | int(3)      | Yes   |      | 0       |        |
|  workshop       | int(3)      | Yes   |      | 0       |        |


```
14 rows in set(0.01 sec)
```
Second year Attendance 2 database 
```
mysql> desc attendence
```
|  Field          | Type        | NULL  | key  | Default | Extra  |
| ----------------|-------------|-------|------|---------|--------|
|  admNo          | varchar(10) | Yes   |      | NULL    |        |
|  tcs            | int(3)      | Yes   |      | 0       |        |
|  control_sys    | int(3)      | Yes   |      | 0       |        |
|  dbms           | int(3)      | Yes   |      | 0       |        |
|  maths          | int(3)      | Yes   |      | 0       |        |
|  communication  | int(3)      | Yes   |      | 0       |        |
|  softtools      | int(3)      | Yes   |      | 0       |        |
|  praccontrolsys | int(3)      | Yes   |      | 0       |        |
|  pracdbms       | int(3)      | Yes   |      | 0       |        |
|  ec             | int(3)      | Yes   |      | 0       |        |
|  em1            | int(3)      | Yes   |      | 0       |        |
|  maths3         | int(3)      | Yes   |      | 0       |        |
|  sfm            | int(3)      | Yes   |      | 0       |        |
|  ecprac         | int(3)      | Yes   |      | 0       |        |

```
14 rows in set(0.01 sec)
```

Total class database
```
mysql> desc tot_class1
```
|  Field           | Type        | NULL  | key  | Default | Extra  |
| -----------------|-------------|-------|------|---------|--------|
|  admNo           | varchar(10) | Yes   |      | NULL    |        |
|  emt             | int(3)      | Yes   |      | 0       |        |
|  pmnt            | int(3)      | Yes   |      | 0       |        |
|  epct            | int(3)      | Yes   |      | 0       |        |
|  fcpt            | int(3)      | Yes   |      | 0       |        |
|  mathsIIt        | int(3)      | Yes   |      | 0       |        |
|  pracfcpt        | int(3)      | Yes   |      | 0       |        |
|  pracemt         | int(3)      | Yes   |      | 0       |        |
|  brspt           | int(3)      | Yes   |      | 0       |        |
|  pracbrspt       | int(3)      | Yes   |      | 0       |        |
|  workshopt       | int(3)      | Yes   |      | 0       |        |

```
11 rows in set(0.01 sec)
```

## Sources 📖 
This webiste is inspired by the app  „Koda Log”
and frontend tutorial by (https://www.w3schools.com/)

## Authors✒️ 

* **Sankirtana**  - [geek-2002](https://github.com/geek-2002)

* **Krithikha**   - [krithikha2001](https://github.com/krithikha2001)


## License📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

