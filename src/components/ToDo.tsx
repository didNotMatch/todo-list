import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
    /* const onClick = (newCategory: IToDo["category"]) => {
        console.log(`Move ${text} to ${newCategory}`);
    }; */
    const setToDos = useSetRecoilState(toDoState);

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newCategory = event.currentTarget.name as IToDo["category"];

        setToDos((prevToDos: IToDo[]) => {
            const toDo = prevToDos.find((toDo: IToDo) => toDo.id === id);

            if (toDo) {
                return [
                    ...prevToDos.filter((toDo: IToDo) => toDo.id !== id),
                    {
                        ...toDo,
                        category: newCategory,
                    },
                ];
            }

            return prevToDos;
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (
                <button name='DOING' onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== "TO_DO" && (
                <button name='TO_DO' onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== "DONE" && (
                <button name='DONE' onClick={onClick}>
                    Done
                </button>
            )}
        </li>
    );
}

export default ToDo;
