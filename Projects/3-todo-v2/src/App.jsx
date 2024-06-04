import AppName from "./Components/AppName";
import Task from "./Components/Task";
import ToDoItems from "./Components/ToDoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "25/07/20024",
    },

    {
      name: "Buy Bread",
      dueDate: "25/07/20024",
    },
    {
      name: "Do Payment",
      dueDate: "25/07/20024",
    }
  ];

  return (
    <div>
      <center>
        <AppName />
        <ToDoItems todoItems={todoItems}/>
      </center>
    </div>
  );
}

export default App;
