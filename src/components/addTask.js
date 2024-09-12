import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class AddTask extends Component {
  constructor() {
    super();
    this.state = { taskIdea: "", taskId: uuidv4(), taskDes: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log("STATE AFTTER SETTING", this.state[event.target.name]);
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert("A name was submitted: " + this.state.value);
    console.log("handlesubmit", this.state);

    let payload = {
      taskIdea: this.state.taskIdea,
      taskId: this.state.taskId,
      taskDes: this.state.taskDes,
    };
    // event.preventDefault();
    fetch("http://localhost:3000/tasks/create", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "your-api-key",
      },
    })
      .then((res) => res.json())
      .then((json) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label for="Title">Title:</label> <br />
        <input
          type="text"
          name="taskIdea"
          value={this.state.taskIdea}
          onChange={this.handleChange}
        />
        <br />
        {/* <label for=" TaskDes"> TaskDes:</label><br/>
  <input type="text"   value={this.state.TaskDes}  onChange={this.handleChange}/><br/>
   */}
        {/* 
        <label className="Title">
          Title
         
         <input
            type="text"
            value={this.state.TaskIdea}
            onChange={this.handleChange}
          /> 
        </label>
       {/* <label>
          TaskId
          <input type="number" value={this.state.TaskId} onChange={this.handleChange} />
        </label> */}
        {/* <label className="taskArea">
          TaskArea
          <input type="text" value={this.state.taskDes} onChange={this.handleChange} />
        </label> */}
        <label for="Description"> TaskDes:</label>
        <br />
        <textarea
          id="w3review"
          name="taskDes"
          rows="4"
          cols="50"
          value={this.state.taskDes}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <input type="submit" />
      </form>
    );
  }
}
