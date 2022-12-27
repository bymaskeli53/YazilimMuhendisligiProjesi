const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")


//Kullanici
router.get("/:idposts", postsController.getById)
router.get("/", postsController.getAll)
router.post("/", postsController.create)
router.put("/:idposts", postsController.update)
router.delete("/:idposts",postsController.delete)


/*Halisaha sahip giris
router.get("/halisahagiris/",hgirisController.getAll)
router.post("/halisahagiris/", hgirisController.create)
router.put("/halisahagiris/:idhkul", hgirisController.update)
router.delete("/halisahagiris/:idhkul",hgirisController.delete)


//Halisahalar
router.get("/halisaha",halisahaController.getAll)
router.post("/halisaha", hgirisController.create)
router.put("/halisaha/:idhalisahalar", hgirisController.update)
router.delete("/halisaha/:idhalisahalar",hgirisController.delete)


//Turnuva
router.get("/turnuva",turnuvaController.getAll)
router.post("/turnuva", turnuvaController.create)
router.put("/turnuva/:idhalisahalar", turnuvaController.update)
router.delete("/turnuva/:idhalisahalar",turnuvaController.delete)*/



module.exports = router;