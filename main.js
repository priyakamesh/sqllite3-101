'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
const dropEmployees =()=>{
  db.run('DROP TABLE employees');
};
// dropEmployees();

//CREATE A TABLE USING JS
db.run("CREATE TABLE IF NOT EXISTS employees (id INT,first TEXT,last TEXT,salary INT,Dept TEXT)");

// db.run('INSERT INTO employees VALUES (1,"Priya","Kamesh",600000)') //NOT SO EFFICIENT

const populateEmployees =()=>{
 const {list} = require('./employees.json');
 list.forEach(each => {
  db.run(`INSERT INTO employees VALUES (${each.id}, "${each.firstName}", "${each.lastName}",${each.salary},"${each.Dept}")`)
 });
};
populateEmployees();
