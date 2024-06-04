import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className="row items">
      {todoItems.map((item) =>
       ( <ToDoItem todoDate={item.dueDate} todoName={item.name}></ToDoItem>)
      )}
    </div>
  );
};

export default ToDoItems;
