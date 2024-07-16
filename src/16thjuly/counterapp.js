import { Component } from "react";


class Statename extends Component{
    state = { count: 0 };

increement(value) {
    this.setState({
        count: this.state.count + value });
    }

decreement()
{
    this.setState({ count: this.state.count-1});
}
    
reset()
{
    this.setState({ count: 0 });
}


render() 
{
    return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={() => this.increement(1)}>+</button>
            <button onClick={() => this.decreement()}>-</button>
            <button onClick={() => this.reset()}>reset</button>
        </div>
    );


};
}

 export default Statename;