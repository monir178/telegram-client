import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useTheme } from '../ui/ThemeToggler';
import background from "../../assets/background.jpeg";
import { useState, useEffect } from 'react';

const MainLayout = () => {
    const { theme } = useTheme();
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const backgroundImage = theme === 'dark' ? undefined : background;
    const backgroundStyle = theme === 'dark' ? { backgroundColor: '#0e1621' } : { backgroundImage: `url(${backgroundImage})` };

    const isChatPage = location.pathname.includes('/chat'); // Adjust this path as needed

    return (
        <div className="flex h-screen bg-secondary">
            {!isMobile || !isChatPage ? <Sidebar /> : null}
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
