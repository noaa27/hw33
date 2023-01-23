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
            <h1 style={{ textAlign: "center" }}>New Ingredient</h1>
            <form className="form-New-ingriden_Recipe">
            <div className="form__controls">
                <div className="form__control">
                <label>Name</label>
                <input
                    type="text"
                    value={enteredName}
                    onChange={inputNameHandler}
                ></input>
                </div>
                <div className="form__control">
                <label>Calories</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredCalories}
                    onChange={caloriesHandler}
                />
                </div>
                <div className="form__control">
                <label>Image</label>
                <input
                    type="text"
                    value={enteredImageUrl}
                    onChange={enteredURLHandler}
                />
                </div>
            </div>
            </form>
        </div>
        <div className="form-Button-Card">
            <div className="form button">
            <button onClick={submitHandler}>Add Ingredient</button>
            <button onClick={resetTextHandler}>Cancel</button>
            </div>
        </div>
        </>
    );
}
