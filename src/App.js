// import logo from './logo.svg';
import './App.css';
import TaskDetail from './components/taskDetail';


 const tasks =[{
  "_id": {
    "$oid": "66d95d7fc13b991c6be8d41a"
  },
  "taskIdea": "manage books",
  "taskId": 12345,
  "taskDes": "manage books from others",
  "__v": 0
},
{
  "_id": {
    "$oid": "66d95db0c13b991c6be8d41e"
  },
  "taskIdea": "buy books",
  "taskId": 12346,
  "taskDes": "buy books from market",
  "__v": 0
},
{
  "_id": {
    "$oid": "66d95decc13b991c6be8d420"
  },
  "taskIdea": "take food",
  "taskId": 12347,
  "taskDes": "buy food from market",
  "__v": 0
}]

function App() {
  const rows = [];
  for (let i = 0; i < tasks.length; i++) {
      rows.push(<TaskDetail task={tasks[i]} />)
  }
  return (
    <div class="main-div">
    <div class="side-bar">
        <div class="menu">
            <h3><strong>menu</strong></h3>
            <input class="Search" type="text" placeholder="Search.."/>
            <div>
                <h4 class="tasks"><strong>tasks</strong></h4>
                <a class="upcoming">upcoming</a>
                <a class="today">Today</a>
                <a class="calender">calender</a>
                <a class="stickyA">Sticky Wall</a>
            </div>
            <div>
                <h4><strong>Lists</strong></h4>
                <a>personal</a>
                <a>work</a>
                <a>list </a>
                <a>add new list</a>
            </div>
            <div>
                <h4><strong>Tags</strong></h4>
                <a>Tag 1</a>
                <a>Tag 2</a>
                <a>add tag</a>
              
            </div>
            <a>Settings</a>
            <a>Sign out</a>
        </div>
    </div>    
    <div class="container">
        <h2> sticky wall</h2>
        {rows}
     </div>
    </div>
  );
}

export default App;
