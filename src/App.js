import logo from "./logo.svg";
import "./App.css";
import Logo from "./Components/Title";
import Item from "./Components/Item";
import { Component } from "react";
import AddItem from "./Components/AddItem";

class App extends Component{
  constructor(){
    super() 
    this.state={list:["Apple","Orenge","Banana","watermelon"],newFruit:""}
  }
 
  hendleClick(newFruit){
    this.state.list.push(newFruit);
    this.setState({list:this.state.list})
  }
  render() {
    const items=[];
    for (let i = 0; i < this.state.list.length; i++) {
    items.push(<Item name={this.state.list[i]}/>);
    }
    return (
      <div className="App">
        <Logo />
        <AddItem name="new Fruit" onAdd={(newFruit)=>{this.hendleClick(newFruit)}}/>
        <AddItem name="new Spice" onAdd={(newFruit)=>{this.hendleClick(newFruit)}}/>
        <AddItem name="new Canned food" onAdd={(newFruit)=>{this.hendleClick(newFruit)}}/>
        {/* <input type="text" value={this.state.newFruit} onChange={(event)=>{this.setState({newFruit:event.target.value})}}/>
            <button onClick={()=>this.hendleClick()}>add</button> */}
        <Item name={items} />
      </div>
    );
  }
}

export default App;
