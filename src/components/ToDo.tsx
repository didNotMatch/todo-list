import { IToDo } from "../atoms";

function ToDo(toDo: IToDo) {
    return (
        <li>
            <span>{toDo.text}</span>
            <button>Doing</button>
            <button>To Do</button>
            <button>Done</button>
        </li>
    );
}

export default ToDo;
