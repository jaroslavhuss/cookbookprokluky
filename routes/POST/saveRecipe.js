const saveRecept = require("express").Router();
const modelRecept = require("../../models/recipe");

saveRecept.post("/save-recipe", (req,res) => {
    const {title, description, preparation, ingredience, method, image} = req.body;
    console.log(req.body);
    const recept = new modelRecept({
        title: title,
        description: description,
        preparation: preparation,
        ingredience: ingredience, 
        method: method,
        image: image
    })
    recept.save((err,document) => {
        if(err){
            return res.json({
                msg:"Bohužel nedošlo k uložení receptu"
            })
        }else{
            return res.json({
                msg: `Došlo k úspěšnému uložení receptu ${JSON.stringify(document)}`
            })
        }
    })
})
saveRecept.get("/save-recipe", (req,res) => {
    res.send("Ano, navštívil jsi /save-recept GETEM")
})

module.exports = saveRecept;