import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen"
import AboutScreen from "./Screen/AboutScreen";
import SettingScreen from "./Screen/SettingScreen";
import BlogScreen from "./Screen/BlogScreen";
import InvalidScreen from "./Screen/InvalidScreen";
import UserScreen from "./Screen/UserScreen";
import AdminScreen from "./Screen/AdminScreen";

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Static routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="settings" element={<SettingScreen />} />
        <Route path="blog" element={<BlogScreen />} />
        <Route path="*" element={<InvalidScreen />} />
        <Route path="users" element={<UserScreen />} />
        <Route path="users/admin" element={<AdminScreen />} />

        {/* dynamic routes */}
        <Route path="users/:userId" element={<UserScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationStack;