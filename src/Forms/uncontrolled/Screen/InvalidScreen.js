import { useNavigate } from "react-router-dom";
import NavBar from "../navbar";

const InvalidScreen = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {  
        navigate("/")
    };
    return(
        <>
    
        <h4> Invalid Screen 404 error </h4>
        <button onClick={navigateToHome}>Go to Home</button>
        </>
    );
};
export default InvalidScreen;