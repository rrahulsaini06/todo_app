import moment from 'moment';
 
 
 
 

export default function TaskDetail(props) {
function handleOnClick( ){
 let url = `http://localhost:3000/tasks/delete/${props.task.taskId}`
  fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({})
  } )
 
    .then((res) =>{res.json ()})
    .then((json) => {
       console.log("response from delete api" , json)
    }).catch((err)=>{
        console.log(err);
    })
    
} 

    console.log(props)
  return (
    <div id="social_media" className="box">
      <h3>{props.task.taskIdea}</h3>
      <p>{props.task.taskDes}</p>
      <p>{props.task?.createdAt? moment().format(props.task.createdAt): ""}</p>
      <button className='delete-btn' onClick={handleOnClick}>Delete Task</button>  
    </div>
  );
}

