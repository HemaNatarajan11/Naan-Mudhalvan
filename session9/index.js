const exp = require("express");
const app = exp();

const mysql = require("mysql2");
//databse server
const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Hema@5541",
  database: "employee",
});
//

db.getConnection((err) => {
  if (err) {
    console.log("database not connected");
  } else {
    console.log("database is connected");
  }
});

//application server
app.listen(8000, () => {
  console.log("server is running on port 8000");
});

//select query
app.get("/alluser", (req, res) => {
    const que = 'SELECT * FROM emp';
    db.query(que, (err, result) => {
        if (err) {
            return res.send("Database error");
        }
        res.send(result);
    });
});


app.get("/single", (resqu, res) => {
    const { empno } = req.body;

    res.send { empno }
    const que = "select * from emp where empno=?";
    db.query(que,[empno] (err, result) => {
     
    });
})

app.post('/sendData', (res, req) => {
    const { empno, ename, job } = req.body;
    const que = 'insert into emp(empno,ename,job)values (?,?,?)'
    db.query(que, [empno, ename, job], (err, result) => {
        if (err) {
            return res.send("database error");
        }
        return res.send("data is inserted");
    })
})

