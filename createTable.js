'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
//Create table
db.run("CREATE TABLE IF NOT EXISTS employees (id INT,first TEXT,last TEXT,title TEXT,address TEXT,salary INT)");
