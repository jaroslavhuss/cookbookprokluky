const deleteRecept = require("express").Router()
const recepts = require("../../models/recipe");

deleteRecept.post("/get-recipes/:id/delete", async(req, res) => {
    const { id } = req.params;
    await recepts.findByIdAndDelete(id);
    ({}, (err, docs) => {
        if(err){
            return res.json({
                msg:"Nepodařilo se smazat žádný recept",
                documents:[]
            })
        }else{
            return res.json({
                msg:"Úspěšně jste smazali recept",
                documents:docs,
            })
        } 
     }) 
})

module.exports = deleteRecept;