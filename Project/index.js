const express = require("express");
const app = express();
const cors = require('cors')

require('dotenv').config()

const postsRouter = require('./routes/posts.router')
const turnuvaRouter = require('./routes/turnuva.router')
const hgirisRouter = require('./routes/hgiris.router')
const halisahalarRouter = require('./routes/halisahalar.router')
const takimRouter = require('./routes/takim.routes')

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(cors())

app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/turnuva", turnuvaRouter)
app.use("/api/v1/halisaha", hgirisRouter)
app.use("/api/v1/halisahalar", halisahalarRouter)
app.use("/api/v1/takim", takimRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("server calisiyor");
})