import { useReducer, useState } from "react"

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    const initialTasks = [
        {
            id: 1,
            text: "Fazer bolo"
        },
        {
            id: 2,
            text: "Fazer academia"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"});
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id: id});
    }

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };

            setTaskText("");

            return [...state, newTask];

            case "DELETE":
                return state.filter((task) => task.id !== action.id);

            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar Número</button>

            <h5>Tarefas:</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <input type="submit" value="Enviar" />
            </form>

            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
            <hr />
        </div>
    )
}

export default HookUseReducer