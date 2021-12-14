import react from "react";
import { Component } from "react";

class AddItem extends Component{
    constructor(){
        super()
        this.state={newFruit:""};
    }
    render(){
        return <div> 
            <h3>{this.props.name}</h3>
            <input type="text" value={this.state.newFruit} onChange={(event)=>{this.setState({newFruit:event.target.value})}}/>
            <button onClick={()=>this.props.onAdd(this.state.newFruit)}>add</button>
        
        </div>
    }
}
export default AddItem;