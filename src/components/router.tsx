import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Store from "./Store";
import Festivals from "./Festivals";
import KandiGenerator from "./KandiGenerator";
import Groups from "./Groups";
import Account from "./Account";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/store",
                element: <Store />,
            },
            {
                path: "/festivals",
                element: <Festivals />,
            },
            {
                path: "kandigen",
                element: <KandiGenerator />,
            },
            {
                path: "groups",
                element: <Groups />,
            },
            {
                path: "account",
                element: <Account />,
            }
        ]
    }
])

export default router