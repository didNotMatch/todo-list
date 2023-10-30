import React from "react";
import GlobalStyle from "./GlobalStyle";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import ToDoList from "./ToDoList";

function App() {
    return (
        <>
            <GlobalStyle />
            <ToDoList />
        </>
    );
}

export default App;
