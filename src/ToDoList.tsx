import React, { useState } from "react";

import { useForm } from "react-hook-form";

function ToDoList() {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onValid = (data: any) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onValid)} style={{display: "flex", flexDirection: "column"}}>
                <input {...register("toDo", { required: true, minLength: 5 })} type='text' placeholder='Write a to do' />
                <button>Add</button>
            </form>
        </div>
    );
}

/* function ToDoList() {
    const [todo, setTodo] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setTodo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' value={todo} onChange={onChange} placeholder='Write a to do' />
                <button>Add</button>
            </form>
        </div>
    );
} */

export default ToDoList;
