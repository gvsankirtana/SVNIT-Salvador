CREATE DATABASE IF NOT EXISTS amoc;
USE amoc;
CREATE TABLE userinfo(
    email varchar(255) NOT NULL, 
    name varchar(255) NOT NULL,
    admNo varchar(255),
    year varchar(3),
    division char(1),
    password varchar(10),
    PRIMARY KEY (email),
    UNIQUE (admNo)
);

CREATE TABLE todo(Select admNo from userinfo);
alter table todo add content varchar(200);

//for first year attendence
CREATE TABLE attendence(
SELECT admNo FROM userinfo
WHERE admNo like 'u19%'
);
alter table attendence add #subject-name-as-per-desc int(3) default 0; 
![]()
//first year total class held
CREATE TABLE tot_class1(
SELECT admNo FROM userinfo
WHERE admNo like 'u19%'
);
alter table tot_class1 add #subject-name-as-per-desc int(3) default 0; 


//second year attendence
CREATE TABLE attendence2(
SELECT admNo FROM userinfo
WHERE admNo like 'u18%'
);
alter table attendence2 add #subject-name-as-per-desc int(3) default 0; 
![]()
//second year total class held
CREATE TABLE tot_class2(
SELECT admNo FROM userinfo
WHERE admNo like 'u18%'
);
alter table tot_class2 add #subject-name-as-per-desc int(3) default 0; 







