import React from "react";

import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
}

function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if (data.password !== data.password1) {
            setError(
                "password",
                {
                    message: "Password is not matched",
                },
                { shouldFocus: true }
            );
            setError("password1", {
                message: "Password is not matched",
            });
        }
        /* setError("extraError", {
            message: "Server Offline",
        }); */
    };

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                        maxLength: {
                            value: 20,
                            message: "Email should be less than 20 characters",
                        },
                    })}
                    placeholder='Email'
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", {
                        required: "write here",
                        validate: {
                            noNico: (value) => (value.includes("nico") ? "no nicos allowed" : true),
                            noNick: (value) => (value.includes("nick") ? "no nicks allowed" : true),
                        },
                    })}
                    placeholder='First Name'
                />
                <span>{errors?.firstName?.message}</span>
                <input {...register("lastName", { required: "write here" })} placeholder='Last Name' />
                <span>{errors?.lastName?.message}</span>
                <input {...register("username", { required: "write here", minLength: 5 })} placeholder='Username' />
                <span>{errors?.username?.message}</span>
                <input {...register("password", { required: "write here", minLength: 5 })} placeholder='Password' />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password1", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is too short.",
                        },
                    })}
                    placeholder='Password1'
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
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
