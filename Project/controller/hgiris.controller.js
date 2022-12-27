const pool = require("../database/index");
const hgirisController = {
    getAll: async(req,res) => {
        try{
            const [rows, fields] = await pool.query("select * from halisahakul")
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
            const {idhkul} = req.params
            const [rows, fields] = await pool.query("select * from halisahakul where idhkul = ? ", [idhkul])
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
    create: async(req, res) => {
        try {
            const {fullname, email, password } = req.body
            const sql = "insert into halisahakul (fullname, email,password) values (?,?,?)"
            const [rows, field] = await pool.query(sql, [fullname,email, password])
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
            const {fullname, email,password} = req.body
            const {idhkul} = req.params
            const sql = "update halisahakul set fullname =?, email = ?, password = ? where idhkul = ?"
            const {rows, fields} = await pool.query(sql, [fullname,email,password,idhkul])
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
            const { idhkul } = req.params
            const [rows, fields] = await pool.query("delete from halisahakul where idhkul = ?", [idhkul])
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

module.exports = hgirisController;