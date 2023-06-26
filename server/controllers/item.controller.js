

 const db = require("../database-mysql");


const selectAll = function (req, res) {
  db.query("SELECT * FROM yachts", (err, yachts, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(yachts);
    }
  });
};
const selectOne = function (req, res) {
    db.query("SELECT * FROM yachts WHERE id=?",[req.params.id] ,(err, yachts, fields)=>{
      if(err){
        res.status(500).send(err)
      }else{
        res.status(200).send(yachts)
      }
    })
}
const updateOne = function (req,res){
    db.query(`UPDATE yachts SET name="${req.body.name}" ,capacity="${req.body.capacity}" ,price="${req.body.price}", image="${req.body.image}" WHERE id=${req.params.id}`,(err,yachts,fields)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(yachts)
        }
    })
}
const createOne = function (req,res){
    db.query("INSERT INTO yachts (name,length,capacity,price,company,image) VALUES (?,?,?,?,?,?)",[req.body.name,req.body.length,req.body.capacity,req.body.price,req.body.company,req.body.image],(err,yachts,fields)=>{
        if(err){
            res.status(err).send(err)
        }else {
            res.status(200).send(yachts)
        }
    })
}
const deleteOne = function (req,res){
    db.query("DELETE FROM yachts WHERE id=?",req.params.id,(err,yachts,fields)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(yachts)
        }
    })
}
const createUser = function (req, res){
    db.query("INSERT INTO user (username) VALUES (?)",[req.body.username],(err,user,fields)=>{
        if(err){
            err.status(500).send(err)
        }else{
            res.status(200).send(user)
        }
    })
}
const getUsers = function (req,res){
    db.query("SELECT * FROM user",(err,user,fields)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(user)
        }
    } )
}



module.exports = { selectAll,selectOne,updateOne,createOne,deleteOne,createUser,getUsers };
