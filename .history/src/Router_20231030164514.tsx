import { createBrowserRouter } from "react-router-dom";
/* import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import Coins from "./routes/Coins"; */

const router = createBrowserRouter([
    /* {
        path: "/",
        element: <Coins />,
    },
    {
        path: "/:coinId/*",
        element: <Coin />,
        children: [
            {
                path: "price",
                element: <Price />,
            },
            {
                path: "chart",
                element: <Chart />,
            },
        ],
    }, */
]);

export default router;
