import axios from "axios";
import React,{Component}from "react";
import CustomImage from "./CustomImage";
import CustomList from "../../Customlist/Custom-list";

class Recipelist extends Component {
    state = {
      recipesList: [],
      loader: true,
      error: false,
    };
  
    
    fetchRecipes = async () => {
      try {
        const { status, data } = await axios.get("https://dummyjson.com/recipes");
        if (status === 200) {
          this.setState({
            recipesList: data.recipes, 
            loader: false,
          });
        }
      } catch (err) {
        this.setState({
          error: true,
          loader: false,
        });
      }
    };
  
    
    componentDidMount() {
      this.fetchRecipes(); 
    }
  
    render() {
      return (
        <div>
          <h4>Hello</h4>
          {this.state.loader ? (
            <h4>Please wait....</h4>
          ) : (
            <>
              {this.state.recipesList.map((eachRecipe) => {
                const { name, image, id, ingredients, instructions } = eachRecipe;
                return (
                  <React.Fragment key={id}>
                    <h4>{name}</h4>
                    
                    <CustomImage source={image} width={100} height={100} />
                    <h1>{`Ingredients required for dish ${name}`} </h1>
                    <CustomList List={ingredients} />
                    <h1>{`Instruction required for dish ${name}`} </h1>
                    <CustomList List={instructions} />
                  </React.Fragment>
                );
              })}
            </>
          )}
        </div>
      );
    }
  }
  
  export default Recipelist;