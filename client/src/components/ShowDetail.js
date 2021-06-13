import React, { useState, useEffect } from "react"
function ShowDetail({ match }) {



    const [recipe, setRecipe] = useState([])
    //eslint-disable-next-line
    const [serverMessage, setServerMessage] = useState("");
    const [ingredience, setIngredience] = useState([])
    useEffect(() => {
        pridaniReceptu();
        //eslint-disable-next-line
    }, [])

    const pridaniReceptu = async () => {
        setServerMessage("načítám data");
        const data = await fetch(`http://localhost:5000/get-recipes/${match.params.id}`);

        const finalData = await data.json();
        console.log(finalData)
        const { msg, documents } = finalData;
        console.log(msg, documents)
        setRecipe(documents);
        setIngredience(documents.ingredience)
        setServerMessage(msg);
        console.log(documents.title)
        return documents
    }

console.log(recipe)
    return <React.Fragment>

        <h1>{recipe.title}</h1>


        <div >
            <img src={recipe.image} style={{ maxWidth: "50%" }} alt="Obrazek recept" />
           <h3>Popisek</h3> <p className="card-text">{recipe.description}</p>
            <p className="card-text" style={{ fontWeight: "bold" }}>Doba přípravy: {recipe.preparation} min </p>
            <p className="card-text">Ingredience: {ingredience.map((ing, index) => {
                              return(
                                  <span key={index} style={{border:"1px solid black", padding:4, margin:3}}>{ing.name} {ing.amount}{ing.unit}</span>
                              )
                          })} </p>
            <p className="card-text">Postup : {recipe.method}</p>
        </div>
        <div>
            <button className = "btn">Edit</button>
            <button className = "btn">Delete</button>
        </div>

    </React.Fragment>
}
export default ShowDetail