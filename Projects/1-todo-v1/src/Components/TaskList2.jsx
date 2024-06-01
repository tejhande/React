function TaskList2(){

  let task = "Buy Bread";
  let date = "26/07/2024"


  return (
    <div class="container">
      <div className="row">
        <div class="col-6">{task}</div>
        <div class="col-4">{date} </div>
        <div class="col-2">
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TaskList2;