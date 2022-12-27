const express = require("express")
const router = express.Router()

const takimController = require("../controller/takim.controller")


//Kullanici
router.get("/:idTakimlar", takimController.getById)
router.get("/", takimController.getAll)
router.post("/", takimController.create)
router.put("/:idTakimlar", takimController.update)
router.delete("/:idTakimlar",takimController.delete)

module.exports = router;