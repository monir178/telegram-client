import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import ChatPage from "../pages/Chat";

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
                element: <ChatPage />,
            },
        ],
    }
]);

export default router;
