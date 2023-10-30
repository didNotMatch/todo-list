import React from "react";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import ToDoList from "./ToDoList";

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <GlobalStyle />
            <ToDoList />
        </>
    );
}

export default App;
