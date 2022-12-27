const pool = require("../database/index");
const halisahaController = {
    getAll: async(req,res) => {
        try{
            const [rows, fields] = await pool.query("select * from halisahalar")
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
            const {idhalisahalar} = req.params
            const [rows, fields] = await pool.query("select * from halisahalar where idhalisahalar = ? ", [idhalisahalar])
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
            const {name, Sehir, ilce, halisahaSahibi } = req.body
            const sql = "insert into halisahalar (name, Sehir, ilce, halisahaSahibi) values (?,?,?,?)"
            const [rows, field] = await pool.query(sql, [name, Sehir, ilce, halisahaSahibi])
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
            const {idhalisahalar} = req.params
            const sql = "update halisahalar set fullname =?, email = ?, password = ? where idhalisahalar = ?"
            const {rows, fields} = await pool.query(sql, [fullname,email,password,idhalisahalar])
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
            const { idhalisahalar } = req.params
            const [rows, fields] = await pool.query("delete from halisahalar where idhalisahalar = ?", [idhalisahalar])
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

module.exports = halisahaController;