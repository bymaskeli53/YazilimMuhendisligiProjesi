const express = require("express")
const router = express.Router()

const hgirisController = require("../controller/hgiris.controller")



router.get("/:idhkul", hgirisController.getById)
router.get("/",hgirisController.getAll)
router.post("/", hgirisController.create)
router.put("/:idhkul", hgirisController.update)
router.delete("/:idhkul",hgirisController.delete)

module.exports = router;