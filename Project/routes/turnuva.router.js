const express = require("express")
const router = express.Router()

const turnuvaController = require("../controller/turnuva.controller")


//Turnuva
router.get("/:idturnuva", turnuvaController.getById)
router.get("/",turnuvaController.getAll)
router.post("/", turnuvaController.create)
router.put("/:idturnuva", turnuvaController.update)
router.delete("/:idturnuva",turnuvaController.delete)


module.exports = router;