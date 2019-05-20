import React from "react";

const Recipe = ({ title, ingredientLines, image, url }) => {
  return (
    <div className="column">
      <div className="row">
        <h1 className="subtitle is-3">{title}</h1>
        <a href={url}>Source Link</a>
        <br />

        <h3 className="subtitle is-4">Ingredients: </h3>
        <p>{ingredientLines}</p>

        <br />
        <img className="is-rounded" src={image} alt="" />
        <hr />
      </div>
    </div>
  );
};

export default Recipe;
