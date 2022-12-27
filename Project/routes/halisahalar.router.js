const express = require("express")
const router = express.Router()

const halisahaController = require("../controller/halisahalar.controller")


router.get("/:idhalisahalar", halisahaController.getById)
router.get("/",halisahaController.getAll)
router.post("/", halisahaController.create)
router.put("/:idhalisahalar", halisahaController.update)
router.delete("/:idhalisahalar",halisahaController.delete)

module.exports = router;
