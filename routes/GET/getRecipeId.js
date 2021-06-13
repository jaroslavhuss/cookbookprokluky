const getReceptId = require("express").Router()
const recepts = require("../../models/recipe");
getReceptId.get("/get-recipes/:id", async(req, res) => {
    const recipe = await recepts.findById(req.params.id);
    recipe.save({}, (err, docs) => {
        if(err){
            return res.json({
                msg:"Bohužel se nepodařilo získat žádný recept",
                documents:[]
            })
        }else{
            return res.json({
                msg:"Úspěšně se podařilo najít recept",
                documents:docs,
            })
        } 
     }) 
})

module.exports = getReceptId;



