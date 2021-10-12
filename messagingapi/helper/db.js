const mysql = require('mysql')
const connect = mysql.createPool({
    connectionLimit:100,
    host:'host.docker.internal',
    user:'dbuser',
    password:'qweqweasd',
    database:'messenger'
})

module.exports = {
    connect
}