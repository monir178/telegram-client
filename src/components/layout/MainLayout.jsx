import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useTheme } from '../ui/ThemeToggler';
import background from "../../assets/background.jpeg";

const MainLayout = () => {
    const { theme } = useTheme();

    const backgroundImage = theme === 'dark' ? undefined : background;
    const backgroundStyle = theme === 'dark' ? { backgroundColor: '#0e1621' } : { backgroundImage: `url(${backgroundImage})` };

    return (
        <div className="flex h-screen bg-secondary" >
            <Sidebar />
            <div
                className="flex-1 overflow-y-auto bg-cover bg-center"
                style={backgroundStyle}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
