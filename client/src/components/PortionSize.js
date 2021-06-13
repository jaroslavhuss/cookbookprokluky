import React, { useRef, useState, useEffect } from "react"
import ConfirmationWindow from "./ConfirmationWindow"
 


const dataRecipe = [
    {
        id: 0,
        name: "mouka",
        number: 1000,
        unit: "g"
    },
    {
        id: 1,
        name: "voda",
        number: 150,
        unit: "ml"
    },
    {
        id: 2,
        name: "maso",
        number: 1,
        unit: "kg"
    },
    {
        id: 3,
        name: "jablko",
        number: 350,
        unit: "g"
    }
]



function PortionSize() {
    
    const defaultDataRecipe = JSON.parse(JSON.stringify(dataRecipe))
    const [isConfirmationWindow, setIsConfirmationWindow] = useState(false)
    const [message, setMessage] = useState("")
    
    const [portionSize, setPortionSize] = useState([...dataRecipe])
    const refNumberOfPortions = useRef(null)

    function closeModal() {
        setIsConfirmationWindow(false)
      }
  
    function handleChange(e) {
        e.preventDefault()
        const value = e.target.value
        if(value < 0){
            setMessage("Takhle nic neuvaříš")
            setIsConfirmationWindow(true)
        }
            defaultDataRecipe.forEach((recipe) => {
             recipe.number = recipe.number * value

         
            setPortionSize(defaultDataRecipe)
          
        })
      
    }
useEffect(()=> {
        refNumberOfPortions.current.focus()
    }, [] )

    return <React.Fragment>
    {isConfirmationWindow && (<ConfirmationWindow modalContent={message} closeModal={closeModal} />)}
        <ul>
            {portionSize.map((recipeIngredients) => {
                const { name, unit, id, number } = recipeIngredients


                return <li key={id}>{name} {number}  {unit} </li>
            })}
        </ul>
        <form>
            <label htmlFor="portionSize"> Počet porcí: </label>
            <input type="number" id="portionSize" name="portionSize" onChange={handleChange} defaultValue = {1} ref = {refNumberOfPortions} ></input>
        </form>


    </React.Fragment>
}

export default PortionSize