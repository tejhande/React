function Task() {
  return (
    <div className="row">
      <div className="col-6">
        <input type="text" placeholder="Enter TODO Here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button className="btn btn1 btn-success">Add</button>
      </div>
    </div>
  );
}

export default Task;
