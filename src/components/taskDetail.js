import moment from 'moment';

export default function TaskDetail(props) {
    console.log(props)
  return (
    <div id="social_media" className="box">
      <h3>{props.task.taskIdea}</h3>
      <p>{props.task.taskDes}</p>
      <p>{props.task?.createdAt? moment().format(props.task.createdAt): ""}</p>
    </div>
  );
}

