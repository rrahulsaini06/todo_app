export default function TaskDetail(props) {
    console.log(props)
  return (
    <div id="social_media" class="box">
      <h3>{props.task.taskIdea}</h3>
      <p>{props.task.taskDes}</p>
    </div>
  );
}
