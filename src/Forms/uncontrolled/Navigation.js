import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../components/Main";
import About from "../../components/About";
import Settings from "../../components/settings";
import Blog from "../../components/Blog";
import InvalidScreen from "./Screen/InvalidScreen";
// import UserScreen from "./Screen/UserScreen";
// import AdminScreen from "./Screen/AdminScreen";
// import RecipeDetail from "./Screen/Recipe-detailsscreen";
// import DoctorsScreen,{NewDoctors,OldDoctors} from "./Screen/doctorScreen";
// import NavBar from "./navbar";

const NavigationStack = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* Static routes */}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<InvalidScreen />} />
        {/* <Route path="users" element={<UserScreen />} />

        <Route path="doctors" element={<DoctorsScreen />}
          <Route path="new" element={<NewDoctors />} />
          <Route path="old" element={<OldDoctors />} />
          </Route>
          <Route path="users/admin" element={<AdminScreen />} />

          

        {/* dynamic routes */}
        {/* <Route path="recipes/:cuisine/:recipeId" element={<RecipeDetail />} />  */}
      </Routes>
    </BrowserRouter>
  );
};


export default NavigationStack;