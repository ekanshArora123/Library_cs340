//Citation for db.connector.js:
// This file is entirely based on db-connect.js from activity 2: Connect webapp to database (individual)
// CS 340 Oregon Statue University

// Get an instance of mysql we can use in the app
let mysql = require('mysql2')

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    waitForConnections: true,
    connectionLimit   : 10,
    host              : 'classmysql.engr.oregonstate.edu',
    user              : 'cs340_fiefa',
    password          : '6750',
    database          : 'cs340_fiefa'
}).promise(); // This makes it so we can use async / await rather than callbacks

// Export it for use in our application
module.exports = pool;