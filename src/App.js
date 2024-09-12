// import logo from './logo.svg';
// eslint-disable-next-line 
import "./App.css";
import TaskDetail from "./components/taskDetail";
import Greeting from "./components/taskList";
import {TaskList} from "./components/taskList"
import {AddTask} from "./components/addTask"
function App() {
 
  return (
    <div className="main-div">
      <div className="side-bar">
        <div className="menu">
          <h3>
            <strong>menu</strong>
          </h3>
          <input className="Search" type="text" placeholder="Search.." />
          <div>
            <h4 className="tasks">
              <strong>tasks</strong>
            </h4>
            <a className="upcoming">upcoming</a>
            <a className="today">Today</a>
            <a className="calender">calender</a>
            <a className="stickyA">Sticky Wall</a>
          </div>
          <div>
            <h4>
              <strong>Lists</strong>
            </h4>
            <a>personal</a>
            <a>work</a>
            <a>list </a>
            <a>add new list</a>
          </div>
          <div>
            <h4>
              <strong>Tags</strong>
            </h4>
            <a>Tag 1</a>
            <a>Tag 2</a>
            <a>add tag</a>
          </div>
          <a>Settings</a>
          <a>Sign out</a>
        </div>
      </div>
      <TaskList/>
      {/* <AddTask /> */}
    </div>
  );
}

export default App;
