import mysql from "mysql2";

const db = mysql.Connection(
    {
        host: "localhost",
        user: "root",
        password: "",
        db: "school-connect",
    }
);

db.connect((err) => {
    if(err){
        console.log("DB Error: ", err);
    } else {
        console.log("MySql Connected!");
    }
});

export default db;