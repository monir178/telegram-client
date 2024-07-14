import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import background from "../../assets/background.jpeg";

const MainLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-8 overflow-y-auto bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;
