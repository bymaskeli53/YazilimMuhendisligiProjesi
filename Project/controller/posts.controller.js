const pool = require("../database/index");
const postsController = {
    getAll: async(req,res) => {
        try{
            const [rows, fields] = await pool.query("select * from posts")
            res.json({
                data: rows
            })
        }
        catch(error)
        {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    getById: async(req, res) => {
        try {
            const {idposts} = req.params
            const [rows, fields] = await pool.query("select * from posts where idposts = ? ", [idposts])
            res.json({
                data: rows
            })
        }
        catch (error)
        {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    create: async (req, res) => {
        try {
            const {name, surname, email, password1, city, position } = req.body
            const sql = "insert into posts (name, surname,email,password1,city,position) values (?,?,?,?,?,?)"
            const [rows, field] = await pool.query(sql, [name, surname, email, password1, city, position ])
            res.json({
                data: rows
            })
        }
        catch (error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    update: async (req, res) => {
        try{
            const {name, surname, email, password1, city, position} = req.body
            const {idposts} = req.params
            const sql = "update posts set name =?, surname = ?, email = ?, password1=?, city=?, position=? where idposts = ?"
            const {rows, fields} = await pool.query(sql, [name, surname, email, password1, city, position,idposts])
            res.json({
                data: rows
            })
        }
        catch (error){
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    delete: async(req, res) => {
        try {
            const { idposts } = req.params
            const [rows, fields] = await pool.query("delete from posts where idposts = ?", [idposts])
            res.json({
                data: rows
            })
        }
        catch (error)
        {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = postsController;