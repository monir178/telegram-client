import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import telegram from "../../assets/telegram.svg";
import { AlignJustify } from 'lucide-react';
import DrawerItems from '../ui/DrawerItems';
import { useTheme } from '../ui/ThemeToggler';
import { useGetAllChats } from '../../hooks/useGetAllChats';
import { formatTime } from '../../utils/formatTime';

const Sidebar = () => {
    const [width, setWidth] = useState(400); // Initial width of Sidebar
    const [isResizing, setIsResizing] = useState(false);
    const sidebarRef = useRef(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const { theme } = useTheme();

    const handleChatClick = (chatId) => {
        setSelectedChat(chatId);
    };



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


    //fetch all chats 
    const { data: chatsData, isLoading, isError } = useGetAllChats();
    const allChats = chatsData?.data?.data?.data;
    console.log(allChats);
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching chats: {isError.message}</p>;



    return (
        <div
            ref={sidebarRef}
            className="h-screen border-r  border-gray-200 overflow-y-auto relative"
            style={{ width }}
        >
            <div className="flex items-center justify-between p-4  ">
                <label htmlFor="my-drawer" >
                    <div className='relative cursor-pointer'>
                        <AlignJustify className='text-gray-400' />
                        <div className="absolute border border-white top-[3px] right-0 h-2 w-2 bg-blue-500 rounded-full"></div>

                    </div>
                </label>
                <div className=" relative w-full ml-4">

                    <input
                        type="text"
                        placeholder="Search"
                        className={`py-1 pl-10 pr-4 rounded-full border focus:bg-secondary focus:outline-none focus:border-gray-200 w-full
                ${theme === 'dark' ? 'bg-neutral border-none focus:outline-gray-200  text-white' : 'bg-gray-200'}
            `}
                    />
                    <div className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gradient-to-tr from-blue-500 to-green-500 p-[1.8px] rounded-full">
                        <img
                            src={telegram}
                            alt="Telegram"
                            className="w-6 bg-white p-[1.2px] rounded-full"
                        />
                    </div>
                </div>
            </div>
            <ul>
                {allChats.map((chat) => (
                    <Link
                        key={chat.id}
                        to={`/chat/${chat.id}`}
                        onClick={() => handleChatClick(chat.id)}
                        className={`block px-4 py-2 ${selectedChat === chat.id ? 'bg-primary text-white cursor-pointer' : 'hover:bg-accent cursor-pointer'}`}
                    >
                        <li>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720915200&semt=ais_user" className='rounded-full w-14 h-14' alt="" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">{chat?.creator?.name}</div>
                                        <div className={`text-xs ${selectedChat === chat.id ? 'text-white' : 'text-gray-500'}`}>last message</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className={`text-sm transition-all ${selectedChat === chat.id ? 'text-white' : 'text-gray-500'}`}>
                                        {formatTime(chat?.created_at)}
                                    </div>
                                    <div className='bg-black text-white bg-opacity-25 rounded-full flex justify-center px-1 py-1 text-xs'>
                                        {chat?.msg_count}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}

            </ul>
            <div
                onMouseDown={handleMouseDown}
                className="absolute top-0 right-[-2px] w-[5px] h-full cursor-ew-resize bg-secondary  hover:bg-gray-400"
            >
                <div className="flex items-center justify-center h-full">
                    <div className="w-0 h-0  border-transparent"></div>
                </div>
            </div>

            {/* The Drawer */}
            <div className="drawer z-[999]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">


                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-secondary text-base-content min-h-full w-80 p-4 pt-6">
                        <DrawerItems />
                    </ul>
                </div>
            </div>


        </div >
    );
};

export default Sidebar;
