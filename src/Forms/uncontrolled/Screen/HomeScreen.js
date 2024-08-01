import { useContext } from "react";
import NavBar from "../components/navbar/navbar";
import { DataContext } from "../App";
import RecipeFinder from "../components/recipeFinder/recipe-finder";

const HomeScreen = () => {
  const { username, counter } = useContext(DataContext);
  const changeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <NavBar />
      <h3>
        Welcome {username} {counter}
      </h3>
      <RecipeFinder />

    </>
  );
};

export default HomeScreen;