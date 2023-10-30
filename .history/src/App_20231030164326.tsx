import React from "react";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
