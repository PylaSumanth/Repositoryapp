import { useContext } from "react";
import NavBar from "../navbar";
import { DataContext } from "../../../App";

const SettingScreen = () => {
  const { username, darkMode, changeUsername, changeCount, counter } =
    useContext(DataContext);
  const nameChanger = () => {
    changeUsername("srinivas");
  };
  const changeCountHandler = () => {
    changeCount(1);
  };
  return (
    <>
      <NavBar />
      <h3>
        Welcome {username} {counter}
      </h3>
      <button onClick={nameChanger}>Change username</button>
      <button onClick={changeCountHandler}>Change count</button>
    </>
  );
};

export default SettingScreen;