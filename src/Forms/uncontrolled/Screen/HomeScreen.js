import React, { useContext } from "react";
import NavBar from "../navbar";
// import WeatherComponent from "../components/weather/weather";
import { DataContext } from "../../../App";
import RecipeFinder from "../RecipeFinder";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../Navigation";

const HomeScreen = () => {
  const { username, counter } = useContext(DataContext);
  const { recipeList, addFavouriteDishHandler } = useContext(RecipeContext);
  const navigate = useNavigate();

  const addFoodHandler = (eachFood) => {
    addFavouriteDishHandler(eachFood);
  };

  const goToFavoriteHandler = () => {
    navigate("/favouriteRecipe");
  };

  return (
    <>
      <NavBar />
      <h3>Welcome {username}, Counter: {counter}</h3>
      {recipeList.length > 0 ? (
        recipeList.map((each) => (
          <div key={each.id}>
            <h4>{each.name}</h4>
            <img src={each.image} width={100} height={100} alt={each.name} />
            <button onClick={() => addFoodHandler(each)}>Add to Favourites</button>
          </div>
        ))
      ) : (
        <p>No recipes available</p>
      )}
      <button onClick={goToFavoriteHandler}>Go to Favourites</button>
      {/* <WeatherComponent /> */}
      <RecipeFinder />
    </>
  );
};

export default HomeScreen;
