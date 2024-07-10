const express = require('express');
const app = express();
const routerMhs = require('./routes/mahasiswa')
const routerMk = require('./routes/matakuliah')
// const routerNilai = require('./routes/nilai')
const port = 3500;
const routerUser = require('./routes/user')
const session = require('express-session');
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose')
require('dotenv').config
mongoose.connect('mongodb://127.0.0.1:27017/siakad',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("sukses terkoneksi dengan database");
})


// Untuk menerima req.body
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false
}))
app.use(routerMhs)
app.use(routerMk)
// app.use(routerNilai)
app.use(routerUser)


app.listen(port, () => {
    console.log(`Server berjalan pada localhost:${port}`);
});