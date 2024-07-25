import { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const FoodItems = () => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      console.log(response.data.recipes);
      if (response.status === 200) {
        setList((list) => (list = response.data.recipes));
        setLoader((loader) => !loader);
      }
    } catch (error) {
      setError((error) => !error);
      setLoader((loader) => loader);
    }
  };

  const deleteHandler = (index) => {
    const finalState = list.filter((_, ind) => ind!== index);
    setList(finalState);
  };

  const addHandler = () => {
    const newdata = {
      id: 31,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 166,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
      mealType: ["Dinner"],
    };

    const newAddData = [...list, newdata];
    setList(newAddData);
  };

  const deleteAll = () => {
    const delState = [];
    setList(delState);
  };

  return (
    <div>
      <button onClick={fetchProducts}>fetch data</button>
      {loader ? (
        <h2>please wait ......</h2>
      ) : (
        <>
          <button onClick={deleteAll}> Delete all </button>
          <button onClick={addHandler}>add item</button>
          <Table striped bordered hover className="mt-4">
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Instructions</th>
            </thead>

            <tbody>
              {list.map((each, index) => {
                return (
                  <tr key={each.id}>
                    <td>{each.id}</td>
                    <td>{each.name}</td>
                   
                    <td>
                      <button onClick={() => deleteHandler(index)}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};
export default FoodItems;