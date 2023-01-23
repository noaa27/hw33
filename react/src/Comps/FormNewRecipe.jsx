import React, { useState } from "react";

const apiUrlRecipes = "https://localhost:52935/api/recipes/"; 

export default function FormNewRecipe(props) {
    const [enteredRecipeName, setRecipeName] = useState("");
    const [enteredCookingMethod, setCookingMethod] = useState("");
    const [enteredCookingTime, setCookingTime] = useState("");
    const [enteredImageUrl, setImageUrl] = useState("");

    const recipeNameHandler = (e) => {
        console.log(e.target.value);
        setRecipeName(e.target.value);
    }; 

    const cookingMethodHandler = (e) => {
        console.log(e.target.value);
        setCookingMethod(e.target.value);
    }; 

    const cookingTimeHandler = (e) => {
        console.log(e.target.value);
        setCookingTime(e.target.value);
    }; 

    const enteredURLHandler = (e) => {
        console.log(e.target.value);
        setImageUrl(e.target.value);
    }; 

    const submitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
        Name: enteredRecipeName,
        CookingMethod: enteredCookingMethod,
        Time: enteredCookingTime,
        Image: enteredImageUrl,
        };
        console.log(newRecipe);
        resetTextHandler();
        fetch(apiUrlRecipes, {
        method: "POST",
        body: JSON.stringify(newRecipe),
        headers: new Headers({
            "Content-type": "application/json; charset=UTF-8", 
            'Accept': "application/json; charset=UTF-8",
        }),
        })
        .then((response) => {
            console.log("response=", response);
            return response.json();
        })
        .then(
            (result) => {
            console.log("fetch POST= ", result);
            console.log(result.Avg);
            },
            (error) => {
            console.log("err post=", error);
            }
        );
    }; 

    const resetTextHandler = () => {
        setRecipeName("");
        setImageUrl("");
        setCookingTime("");
        setCookingMethod("");
    }; 

    return (
        <>
        <div className="card">
            <h1 style={{ textAlign: "center" }}>New Recipe</h1>
            <form className="form-New-ingriden_Recipe">
            <div className="form__controls">
                <div className="form__control">
                <label>Name</label>
                <input
                    type="text"
                    value={enteredRecipeName}
                    onChange={recipeNameHandler}
                ></input>
                </div>
                <div className="form__control">
                <label>Cooking Method</label>
                <input
                    type="text"
                    value={enteredCookingMethod}
                    onChange={cookingMethodHandler}
                />
                </div>
                <div className="form__control">
                <label>Time</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredCookingTime}
                    onChange={cookingTimeHandler}
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
            <button onClick={submitHandler}>Add Recipe</button>
            <button onClick={resetTextHandler}>Cancel</button>
            </div>
        </div>
        </>
    );
}
