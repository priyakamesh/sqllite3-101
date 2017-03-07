'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
// const dropEmployees =()=>{
//   db.run('DROP TABLE employees');
// };

// //CREATE A TABLE USING JS
db.run("CREATE TABLE IF NOT EXISTS employees (id INT,first TEXT,last TEXT,title TEXT,address TEXT)");

// // db.run('INSERT INTO employees VALUES (1,"Priya","Kamesh",600000)') //NOT SO EFFICIENT

const populateEmployees =()=>{
 const {list} = require('./employees.json');
 list.forEach(({id,firstName,lastName,jobTitle,address}) => {
  db.run(`INSERT INTO employees VALUES (${id}, "${firstName}", "${lastName}","${jobTitle}","${address}")`)
 });
};
// populateEmployees();

//QUERY METHODS
//get not effective bcoz  it returns only first row
    // db.get(`SELECT * FROM employees`, (err,row)=>{
    //   console.log(row);
    // })

db.all(`SELECT * FROM employees`,(err,allRows)=>{ //all(callback) will fire once
  allRows.forEach(({id,first,last,title,address}) =>{
    console.log(`${id} ${first} ${last} Job Title : ${title} Address:${address}` )
  });
})
db.all(`SELECT title FROM employees WHERE title = "cashier"`,(err,allRows)=>{ //all(callback) will fire once
  allRows.forEach(({title}) =>{
    console.log(` Job Title : ${title}` )
  });
})
db.all(`SELECT first,last,address FROM employees`,(err,allRows)=>{
  allRows.forEach(({first,last,address})=>{
    console.log(`${first} ${last} ${address}`)
  })
})
// db.each(`SELECT * FROM employees`,(err,{id,first,last,Dept,salary}) => { //each(callback) will fire for each object, so good for larger databases(its basically storing chunks of data)
//   console.log(new Date().getMilliseconds())
//   console.log(`${id} ${first} ${last} From ${Dept} Department SALARY:${salary}`);
//



//1.sort all by alphabetically
//2.create a new array of all employees more than 50000
// db.all(`SELECT first,last,salary FROM employees
//         WHERE employees.salary > 50000
//         GROUP BY employees.first`,(err,allRows)=>{
//           if(err) {return console.log(err.toString())}
//   allRows.forEach(({id,first,last,Dept,salary})=>{
//     console.log(` ${first} ${last} SALARY:${salary}`);
//   })
// })
