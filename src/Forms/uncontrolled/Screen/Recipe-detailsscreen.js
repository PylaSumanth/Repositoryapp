import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Customspinner from "../Customspinner";
import CustomList from "../Customlist";
import "./Recipe-details.css"

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEachProduct = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
        setRecipeDetail(data);
      } catch (err) {
        console.error("Failed to fetch recipe details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEachProduct();
  }, [recipeId]);

  if (loading) {
    return (
      <div className="spinner-container">
        <Customspinner />
        <h3 className="spinner-message">Please wait, data is loading....</h3>
      </div>
    );
  }

  return (
    <div className="recipe-detail-container">
      {recipeDetail ? (
        <>
          <h5 className="recipe-title">{recipeDetail.name}</h5>
          <h5 className="recipe-rating">Rating: {recipeDetail.rating}</h5>
          <img
            src={recipeDetail.image}
            alt={recipeDetail.name}
            className="recipe-image"
            width={100}
            height={100}
          />
          <CustomList list={recipeDetail.ingredients} className="custom-list" />
          <CustomList
            list={recipeDetail.instructions}
            className="custom-list"
          />
          <p>Prep Time: {recipeDetail.prepTimeMinutes} minutes</p>
          <p>Cook Time: {recipeDetail.cookTimeMinutes} minutes</p>
          <p>Servings: {recipeDetail.servings}</p>
          <p>Difficulty: {recipeDetail.difficulty}</p>
          <p>Cuisine: {recipeDetail.cuisine}</p>
          <p>Calories per Serving: {recipeDetail.caloriesPerServing}</p>
          <p>Tags: {recipeDetail.tags.join(", ")}</p>
          <p>Meal Types: {recipeDetail.mealType.join(", ")}</p>
          <p>Reviews: {recipeDetail.reviewCount}</p>
        </>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default RecipeDetail;
