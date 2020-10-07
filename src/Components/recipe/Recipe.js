import React from 'react';
import './recipe-module.css';

const Recipe = ({title, calories, image, ingredients, key}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li className="list-elements">
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p><b>Calories:</b> {calories}</p>
            <img className="image" src={image} alt=""/>
        </div>
    );
}


export default Recipe;