import React from 'react';
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./App";
const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
