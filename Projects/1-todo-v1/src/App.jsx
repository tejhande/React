import AppName from "./Components/AppName";
import Task from "./Components/Task";
import TaskList1 from "./Components/TaskList1";
import TaskList2 from "./Components/TaskList2";

function App() {
  return (
    <div>
      <center>
        <AppName />
        <Task />
        <div class="row items">
        <TaskList1 />
        <TaskList2 /></div>
      </center>
    </div>
  );
}

export default App;
