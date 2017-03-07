'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
const dropEmployees =()=>{
  db.run('DROP TABLE employees');
};
dropEmployees();
