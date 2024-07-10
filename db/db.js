const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'siswa'
});
connection.connect (error => {
    if (error) throw error;
    console.log("sukses masuk ke database")
});

module.exports = connection