const pool = require("../database/index");
const turnuvaController = {
    getAll: async(req,res) => {
        try{
            const [rows, fields] = await pool.query("select * from turnuva")
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
            const {idturnuva} = req.params
            const [rows, fields] = await pool.query("select * from turnuva where idturnuva = ? ", [idturnuva])
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
            const {Halisahaname, takimSayisi, odul, Tarih } = req.body
            const sql = "insert into turnuva (Halisahaname, takimSayisi, odul, Tarih) values (?,?,?,?)"
            const [rows, field] = await pool.query(sql, [Halisahaname, takimSayisi, odul, Tarih])
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
            const {Halisahaname, takimSayisi, odul, Tarih} = req.body
            const {idturnuva} = req.params
            const sql = "update turnuva set Halisahaname =?, takimSayisi = ?, odul = ?, Tarih = ?  where idturnuva = ?"
            const {rows, fields} = await pool.query(sql, [Halisahaname, takimSayisi, odul, Tarih, idturnuva])
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
            const { idturnuva } = req.params
            const [rows, fields] = await pool.query("delete from turnuva where idturnuva = ?", [idturnuva])
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

module.exports = turnuvaController;