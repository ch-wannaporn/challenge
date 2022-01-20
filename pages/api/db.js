import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: "127.0.0.1",
        port: 3306,
        database: "challenge",
        user: "root",
        password: ""
    }
})

export default db;