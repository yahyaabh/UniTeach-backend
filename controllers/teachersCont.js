import pool from "../db/connect.js";

const registerTeacher = async (req,res) => {
    const name = req.body.name;
    const number = req.body.number;
    const password = req.body.password;
    const location = req.body.location;
    const gender = req.body.gender;
    //about the data types checking it is in the frontend
    //for updating data later on we are gonna use the pass and id stored in session for verfication
    
    await pool.query(`INSERT INTO USERS (name,number,password,location,gender) VALUES ('${name}','${number}','${password}','${location}','${gender}');`,
    
    (error,results) => {
        if (error) {
            throw error.message
        }

        res.status(200).send(results.rows)
    })
    
    
}

const loginTeacher = async (req,res) => {
    const number = req.body.number;
    const password = req.body.password;

    const pass = (await pool.query(`SELECT password FROM USERS WHERE number='${number}';`)).rows[0].password;
    const id = (await pool.query(`SELECT id FROM USERS WHERE number='${number}';`)).rows[0].id;
    

    if (password != pass) {
        res.status(401).send({message: "password is wrong please try again!"})
    }
    else {
        res.status(200).send({
            id: id,
            number:number,
            password:password
        })
    }

    
}

const addSkills = async (req,res) => {
    const number = req.body.number;
    const message = req.body.message;

    await pool.query(`UPDATE users SET skills = '${message}' WHERE number = '${number}';`,(error,results) =>{
        if(results.rowCount == 0) {
            res.status(401).send({message: "an error occured please try again later."})
        }
        else {
            res.status(200).send({message: "Your needs have been added."})
        }
    });
}

const searchStudents = async (req,res) => {
    const message = req.body.message;
    

    await pool.query(`SELECT * FROM USERS WHERE needs % '${message}';`,(error,results) => {
        if(error) {
            throw error
        }
        else if(results.rowCount == 0) {
            res.status(200).send({message:"no results"})
        }
        else {
            res.status(200).send(results.rows)
        }
    })

}
export {registerTeacher, loginTeacher, addSkills, searchStudents}