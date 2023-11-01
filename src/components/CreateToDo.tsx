import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import { useEffect } from "react";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const toDos = useRecoilValue(toDoState);
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IForm>();

    const handleValid = ({ toDo }: IForm) => {
        setToDos((prev) => [
            ...prev,
            {
                text: toDo,
                id: Date.now(),
                category,
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
