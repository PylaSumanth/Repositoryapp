import React,{Component} from "react";
import CustomProgressBar from "../../../Bootstrap/progress-bar";

export default class IplData extends Component{
    state={
 IplData: [
    {
        id:1,
        name:"CSK",
        totalwincount: 5,
    },
    {
    id:2,
    name:"SRH",
    totalwincount: 2,
    },
    {
    id:3,
    name:"MI",
    totalwincount: 5,
    },
  ],
};
calaculatePercentage=(input)=>{
    const base=7;
    const percentage=(input/base)*100;

    return percentage;
};
handleclick=(targetId)=>{
    const newstate=this.IplHandler(this.state.IplData,targetId);
    this.setState({
        IplData:newstate,
    });
};
IplHandler=(Ipldata,targetTeamId)=>{
    const updatedIplData=IplData.map((each)=>{
                if(each.id===targetTeamId){
                    return{ ...each, totalwincount: each.totalwincount +1 };
                } else {
                    return each;
                }
            });
        return updatedIplData;
        
        };
        render() {
            return (
                <div> 
                    {this.state.IplData.map((each)=>{
                        return(
                    <>
                    <h3>TeamName{each.name}</h3>
                    <button onClick={()=>this.handleclick(each.id)}>
                        click to increase wincount
                    </button>
                    <CustomProgressBar
                    scale={this.calaculatePercentage(each.totalwincount)}
                    />
                    </>
                        );
                    })}
                    </div>
                    );
                }
            }

    
