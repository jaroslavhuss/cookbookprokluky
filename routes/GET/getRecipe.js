const getRecepts = require("express").Router()
const recepts = require("../../models/recipe");
getRecepts.get("/get-recipes", (req, res) => {
    recepts.find({}, (err, docs) => {
        if(err){
            return res.json({
                msg:"Bohužel se nepodařilo získat žádné dokumenty",
                documents:[]
            })
        }else{
            return res.json({
                msg:"Úspěšně se nám poařilo získat recepty",
                documents:docs,
            })
        } 
     }) 
})

module.exports = getRecepts;