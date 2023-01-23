import React, { useState } from "react";


export default function FormNewIngredient() {
    const [enteredName, setEnteredName] = useState("");
    const [enteredImageUrl, setImageUrl] = useState("");
    const [enteredCalories, setCalories] = useState("");

    const inputNameHandler = (e) => {
        console.log("Name entered " + e.target.value);
        setEnteredName(e.target.value);
    }; 

    const enteredURLHandler = (e) => {
        console.log("url - " + e.target.value);
        setImageUrl(e.target.value);
    }; 

    const caloriesHandler = (e) => {
        console.log("entered calories " + e.target.value);
        setCalories(e.target.value);
    };
    

    const resetTextHandler = () => {
        setEnteredName("");
        setImageUrl("");
        setCalories("");
    }; 
    const submitHandler = (e) => {
        e.preventDefault();
        const newIngriden = {
        name: enteredName,
        image: enteredImageUrl,
        calories: enteredCalories,
        };
        console.log(newIngriden);
        resetTextHandler();


    }; 
    return (
        <>
        <div className="card">
            <h1>New Ingredient</h1>
            <form>
            <div>
                <div>
                <label>Name</label>
                <input type="text" value={enteredName}  onChange={inputNameHandler}
                ></input>
                </div>
                <div>
                <label>Calories</label>
                <input type="number" value={enteredCalories}  onChange={caloriesHandler}/>
                </div>
                <div>
                <label>Image</label>
                <input  type="text" value={enteredImageUrl} onChange={enteredURLHandler}/>
                </div>
            </div>
            </form>
        </div>
        <div>
            <div>
            <button onClick={submitHandler}>Add Ingredient</button>
            <button onClick={resetTextHandler}>Cancel</button>
            </div>
        </div>
        </>
    );
}
