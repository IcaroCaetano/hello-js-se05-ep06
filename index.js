// index.js
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))

app.get("/listpessoas", (req, res) => {
  knex("pessoas").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.get("/:idpessoa", (req, res) => {
    const idpessoa = req.params.idpessoa
    knex("pessoas").select().where({idpessoa}).then(ret => {
        res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
  })


  app.post("/Save", (req, res) => {
    const pessoas = req.body
    knex("pessoas").insert(pessoas, "idpessoa").then(ret => {
        res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
  })

  app.put('/Save', (req, res) => {
    const pessoas = req.body.idpessoa
    knex("pessoas").update(req.body).where({idpessoa})
    .then(ret => {
        res.send(ret)
    }).catch(err => {
        res.status(500).send(err)
        console.log(err)
      })
  })

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
    console.log("server online!")))