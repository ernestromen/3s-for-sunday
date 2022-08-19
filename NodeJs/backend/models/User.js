const mysql = require('mysql');
const bcrypt = require('bcrypt');               //Importing the NPM bcrypt package.
const saltRounds = 10; 

class DB{

  constructor(){
    this.con().connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
 }

    con(){
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "nodejs2"
          });
     }   
}


class User extends DB{


    storeUserData(data){
              let name = data.name;
              let company = data.company;
              let email = data.email;
              let password = data.password;

              bcrypt.hash(password, saltRounds, (err, hash) => {
                password = hash;
                let sql = `INSERT INTO users (name, company,email,password) VALUES ('${name}', '${company}','${email}','${password}')`;

                this.con().query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted");
                });
              });
             
    }

   
    
    showUserData(res){ 

        let sql = "SELECT * FROM users";
        this.con().query(sql, function (err, result) {
          if (err) throw (err);

       res.end(JSON.stringify(result),function(err){
      });

        })
        .then(results=>results);

      }


  
}





module.exports ={
    User
    }