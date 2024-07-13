import { createBrowserRouter } from "react-router-dom";
import Chat from "../pages/Chat";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
        ]
    }

])

export default router;