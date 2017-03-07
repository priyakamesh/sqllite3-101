'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
const dropEmployees =()=>{
  db.run('DROP TABLE employees');
};
//dropEmployees();

//CREATE A TABLE USING JS
db.run("CREATE TABLE IF NOT EXISTS employees (id INT,first TEXT,last TEXT,salary NUMBER(6,2))");

//db.run('INSERT INTO employees VALUES (1,"Priya","Kamesh",60000.00)') //NOT SO EFFICIENT
