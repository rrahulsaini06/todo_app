// import { Component } from "react";

import { Component } from "react";
import TaskDetail from "./taskDetail"; 

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
    }
    
    render(){
        const tasks = [
            {
              _id: {
                $oid: "66d95d7fc13b991c6be8d41a",
              },
              taskIdea: "manage books",
              taskId: 12345,
              taskDes: "manage books from others",
              __v: 0,
            },
            {
              _id: {
                $oid: "66d95db0c13b991c6be8d41e",
              },
              taskIdea: "buy books",
              taskId: 12346,
              taskDes: "buy books from market",
              __v: 0,
            },
            {
              _id: {
                $oid: "66d95decc13b991c6be8d420",
              },
              taskIdea: "take food",
              taskId: 12347,
              taskDes: "buy food from market",
              __v: 0,
            },
            {
              _id: {
                $oid: "66dacdddbf4a6544c6ac4b66",
              },
              taskIdea: "take train ticket",
              taskId: 123420,
              taskDes: "take a train ticket  from bus stop",
              createdAt: "2024-09-06T09:39:41.067Z",
              updatedAt:"2024-09-06T09:39:41.067Z",
              __v: 0,
            },
          ];
        const rows = [];
        for (let i = 0; i < tasks.length; i++) {
          rows.push(<TaskDetail task={tasks[i]} />);
        }
        return(
            <div class="container">
            <h2> sticky wall</h2>
            {rows}
            
          </div>
        )
    }
 }
