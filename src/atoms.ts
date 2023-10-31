import { atom } from "recoil";


export const isDarkAtom = atom({
    key: "isDark",
    default: false,
});
export interface IToDo {
    text: string;
    id: number;
    category: "DONE" | "DOING" | "TO_DO";
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});
