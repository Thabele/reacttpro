import React, {Component} from 'react'
class Example extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
         }
         render(){
            return(
                <div>
                    <p>you clicked{this.state.count} times</p>
                    <button onClick={()=>this.setState({count:this.State.count+1})}>Click Me</button>
                </div>
            )
            };    

    };
    export default Example;
