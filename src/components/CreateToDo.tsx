import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IForm>();

    const handleValid = ({ toDo }: IForm) => {
        console.log("to do : ", toDo);
        setToDos((prev) => [
            ...prev,
            {
                text: toDo,
                id: Date.now(),
                category: "TO_DO",
            },
        ]);
        setValue("toDo", "");
    };

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                type='text'
                {...register("toDo", {
                    required: "To do is required",
                })}
                placeholder='Write a to do'
            />
            <span>{errors?.toDo?.message}</span>
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;
