import { render } from "@testing-library/react";
import React, { Component } from "react"; 

export default class updatingComponent extends Component {
      Constructor( ) {
        super()
        this.state = {
            CakeCount: 100,
        };
      }

        buycakehandler=()=>{
            this.setState({
                cakeCount:this.state.cakeCount-1,
            });

        };
      
        shouldComponentUpdate(){
            return false;
        }
        getSnapshotBeforeUpdate(prevProps,PrevState){
            console.log(PrevState);
            return null;
        }

        componentDidMount(){
        document.title =`cakecount${this.state.cakeCount}`;
    }

      ComponentDidUpdate(){
        document.title =`cakecount${this.state.cakeCount}`;
      }
      render(){
        console.log("render executing...");
        return(
        <div>
         <h1>no.of cakes in the shop{this.State.cakeCount}</h1>
         <button onClick={this.buycakehandler}/>
         </div>
      )};

    };