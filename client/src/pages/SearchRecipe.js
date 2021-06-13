import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import SearchBar from "../components/Search";
function SearchRecipe() {
    const [recipes, setRecipes] = useState([]);
    const [recipesFiltered, setRecipesFiltered] = useState([])
    const [input, setInput] = useState("")
  




    useEffect(() => {
        pridaniReceptu();
    }, [])

    const pridaniReceptu = async () => {
      
        const data = await fetch("http://localhost:5000/get-recipes");
        const finalData = await data.json();
        const {documents } = finalData;

        console.log(documents)
        setRecipes(documents);
      


    }
    async function updateInput(input) {
        const filtered = recipes.filter(recipe => {
            return recipe.title.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setRecipesFiltered(filtered);
    }


    return <React.Fragment>
        <SearchBar input={input} onChange={updateInput} />


        <div>
            {
                recipesFiltered.map((recipe, index) => {

                    return (
                        <section key={recipe._id}>

                            {

                                <div className="container-fluid p-3 w-50">
                                    <div className="card-deck">
                                        <div className="card">
                                            <div className="card-body p-1">
                                                <h6 className="card-title">{recipe.title}</h6>
                                                <img src={recipe.image} className="img-thumbnail" alt="Obráezk receptu" />
                                                <p className="card-text"><b> Krátký popisek:</b> {recipe.description}</p>
                                                <p className="card-text">Ingredience: {recipe.ingredience} </p>
                                                <p className="card-text">Doba přípravy: {recipe.preparation} min</p>
                                                <p className="card-text">Postup: {recipe.method}</p>
                                                <Link to={`recipes/${recipe._id}`} >  <button className="btn">Detail</button> </Link>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            }
                        </section>
                    )
                })
            }
        
       
        </div>
        )


    </React.Fragment>  }




    export default SearchRecipe