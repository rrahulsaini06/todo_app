// import { Component } from "react";

import { Component } from "react";
import TaskDetail from "./taskDetail"; 
// import fetch from "fetch"
// class Greeting extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 0 };
//   }
//   increaseCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
//   render() {
//  return (  <div>
//       return <h1>Hello, {this.state.counter}!</h1>
//       <button onClick={this.increaseCounter}>increase count</button>
//     </div>)
//   }
// }
// export default Greeting;
 
export  class TaskList extends Component{
    
    constructor(){
        super();
        this.state = {
            tasks: [],
            DataisLoaded: false,
        };
        console.log(this.tasks);
    }

    componentDidMount() {
        fetch("http://localhost:3000/tasks", {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': 'your-api-key'
            }
          } )
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    tasks: json.data,
                    DataisLoaded: true,
                });
            }).catch((err)=>{
                console.log(err);
            })
    }
    
    render(){
       

        const rows = [];
        for (let i = 0; i < this.state.tasks.length; i++) {
          rows.push(<TaskDetail task={this.state.tasks[i]} />);
        }
        return(
            <div className="container">
            <h2> sticky wall</h2>
            {rows}
            
          </div>
        )
    }
 }
