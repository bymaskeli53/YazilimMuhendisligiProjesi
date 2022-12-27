const pool = require("../database/index");
const takimController = {
    getAll: async(req,res) => {
        try{
            const [rows, fields] = await pool.query("select * from takimlar")
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
            const {idTakimlar} = req.params
            const [rows, fields] = await pool.query("select * from takimlar where idTakimlar = ? ", [idTakimlar])
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
            const {TakimAdi, KisiSayisi, OynananMac } = req.body
            const sql = "insert into takimlar (TakimAdi, KisiSayisi,OynananMac) values (?,?,?)"
            const [rows, field] = await pool.query(sql, [TakimAdi,KisiSayisi, OynananMac])
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
            const {TakimAdi, KisiSayisi, OynananMac} = req.body
            const {idTakimlar} = req.params
            const sql = "update takimlar set TakimAdi =?, KisiSayisi = ?, OynananMac = ? where idTakimlar = ?"
            const {rows, fields} = await pool.query(sql, [TakimAdi, KisiSayisi, OynananMac,idTakimlar])
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
            const { idTakimlar } = req.params
            const [rows, fields] = await pool.query("delete from takimlar where idTakimlar = ?", [idTakimlar])
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

module.exports = takimController;