// import logo from './logo.svg';
import "./App.css";
import TaskDetail from "./components/taskDetail";
import Greeting from "./components/taskList";
import {TaskList} from "./components/taskList"
 

function App() {
 
  return (
    <div class="main-div">
      <div class="side-bar">
        <div class="menu">
          <h3>
            <strong>menu</strong>
          </h3>
          <input class="Search" type="text" placeholder="Search.." />
          <div>
            <h4 class="tasks">
              <strong>tasks</strong>
            </h4>
            <a class="upcoming">upcoming</a>
            <a class="today">Today</a>
            <a class="calender">calender</a>
            <a class="stickyA">Sticky Wall</a>
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
    </div>
  );
}

export default App;
