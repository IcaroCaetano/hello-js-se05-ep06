const pessoas = [
    {nome: "Marcos", telefone: "23445678" },
    {nome: "Jefferson", telefone: "6545465464" },
    {nome: "Bruno", telefone: "56775434" },
    {nome: "Sillas", telefone: "33333333" },
    {nome: "Denis", telefone: "44343434" }
  ]
  
  exports.up = knex => knex("pessoas").insert(pessoas)
  
  exports.down = knex => knex("pessoas").del()
    .whereIn("idpessoa", pessoas.map(e => e.idpessoa))