import React, { Component } from "react";

class ClassBasedcomp extends Component{
constructor(props){
    super(props);
    this.state={
        count:0
    }
}

async componentDidMount(){
//    const data = await fetch("https://api.github.com/users/akshaymarch7")
//    const json = await data.json();
//    console.log(json);
}
render(){
    const {name}=this.props;
    
    return(
        <div className='border border-cyan-400 p-4'>
        <h2>text</h2>
        <button onClick={()=>{this.setState({count:this.state.count+1})}} className="bg-primary text-white border-r-primary rounded-md px-3 y-1">text</button>
        <h2>Count = {this.state.count}</h2>
        </div>
    );
}
}

export default ClassBasedcomp;