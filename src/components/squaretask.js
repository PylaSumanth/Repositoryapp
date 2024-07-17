import { Component } from "react";
import './square.css'

class SquareComponent extends Component {
    render( ){
        return (
            < >
            <div>
           <h1>SquareComponent</h1> 
           <div className="square-card">CSK</div>
           <div className="square-card1">SRH</div>
           <div className="square-card2">MI</div>
           <div className="square-card3">LSG</div>
           </div>
            </>
        );
    }
}
export default SquareComponent;