

import React, { createContext, useState } from "react";
// import UncontrolledForm from "./components/forms/uncontrolled/uncontrolled-form";
// import ControlledForm from "./components/forms/controlled/controlled-form";
// import WeatherComponent from "./components/weather/weather";
import NavigationStack from "./Forms/uncontrolled/Navigation";

export const DataContext = createContext();

const App = () => {
  const [username, setUserName] = useState("sumanth");
  const [darkMode, setDarkMode] = useState(true);
  const [counter, setCounter] = useState(100);

  const changeUsername = (newName) => {
    setUserName(newName);
  };

  const changeCount = (value) => {
    setCounter(counter + value);
  };

  return (
    <DataContext.Provider
      value={{
        username,
        darkMode,
        changeUsername,
        counter,
        changeCount,
      }}
    >
      <NavigationStack />
    </DataContext.Provider>
  );
};

export default App;
