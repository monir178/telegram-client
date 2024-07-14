import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import telegram from "../../assets/telegram.svg";
import { AlignJustify } from 'lucide-react';

const Sidebar = () => {
    const [width, setWidth] = useState(400); // Initial width of Sidebar
    const [isResizing, setIsResizing] = useState(false);
    const sidebarRef = useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const chats = [
        { id: 1, name: 'Chat 1', lastMessage: 'Last message from Chat 1', time: '3:31 PM' },
        { id: 2, name: 'Chat 2', lastMessage: 'Last message from Chat 2', time: '1:51 PM' },
        { id: 3, name: 'Chat 3', lastMessage: 'Last message from Chat 3', time: '12:15 PM' },
    ];

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsResizing(true);
    };

    const handleMouseMove = (e) => {
        if (isResizing) {
            setWidth(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
    };

    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div
            ref={sidebarRef}
            className="h-screen border-r border-gray-200 overflow-y-auto relative"
            style={{ width }}
        >



            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <label htmlFor="my-drawer" >
                    <div className='relative' onClick={toggleDrawer}>
                        <AlignJustify className='text-gray-400' />
                        <div className="absolute border border-white top-[3px] right-0 h-2 w-2 bg-blue-500 rounded-full"></div>

                    </div>
                </label>
                <div className="relative w-full ml-4">

                    <input
                        type="text"
                        placeholder="Search"
                        className="py-1 pl-10 pr-4 bg-gray-200 rounded-full border focus:bg-white focus:outline-none focus:border-gray-200 w-full"
                    />
                    <div className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gradient-to-tr from-blue-500 to-green-500 p-[2px] rounded-full">
                        <img
                            src={telegram}
                            alt="Telegram"
                            className="w-6 bg-white p-[1.5px] rounded-full"
                        />
                    </div>
                </div>
            </div>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.id} className="p-4 border-b border-gray-300 hover:bg-gray-200">
                        <Link to={`/chat/${chat.id}`} className="flex justify-between items-center">
                            <div>
                                <div className="font-bold text-base">{chat.name}</div>
                                <div className="text-sm text-gray-600">{chat.lastMessage}</div>
                            </div>
                            <div className="text-sm text-gray-500">{chat.time}</div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                onMouseDown={handleMouseDown}
                className="absolute top-0 right-[-2px] w-1 h-full cursor-ew-resize bg-gray-200  hover:bg-gray-400"
            >
                <div className="flex items-center justify-center h-full">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-400"></div>
                </div>
            </div>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
