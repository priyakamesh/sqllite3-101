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
// populateEmployees();

//QUERY METHODS
//get not effective bcoz  it returns only first row
    // db.get(`SELECT * FROM employees`, (err,row)=>{
    //   console.log(row);
    // })

db.all(`SELECT * FROM employees`,(err,allRows)=>{
  // console.log(allRows)
  allRows.forEach(({id,first,last,Dept,salary}) =>{
    console.log(`${id} ${first} ${last} From ${Dept} Department SALARY:${salary}` )
  });
})
