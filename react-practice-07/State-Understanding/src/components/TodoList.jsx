import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState(["Learn React", "Build a project"]);
    const [newItem, setNewItem] = useState("");

    const addTodo = () => {
        if (newItem.trim() === "") return;
        // const copy = [...todos];
        // kabhi bhi Array ko directly mutate mat karo - Kyunki React re-render trigger nahi karega.
        // . Naya item add karne ke liye "spread Operator" ka use karo - ye ek naya shallow copy banata hai.
        setTodos([...todos, newItem]);
        setNewItem(""); //iska kaam hai newItem ko input ke duara aaya gaya strig ko khali karna
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a todo"
            />

            <button onClick = {addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) =>(
                    <li key = {index}>
                        {todo} <button onClick = {() => removeTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
export default TodoList;