import { createBrowserRouter } from "react-router-dom";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "chat/:chatId",
                element: <Chat />,
            },
        ],
    }
]);

export default router;
