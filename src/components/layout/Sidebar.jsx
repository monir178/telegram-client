import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import telegram from "../../assets/telegram.svg";
import { AlignJustify } from 'lucide-react';
import DrawerItems from '../ui/DrawerItems';

const Sidebar = () => {
    const [width, setWidth] = useState(400); // Initial width of Sidebar
    const [isResizing, setIsResizing] = useState(false);
    const sidebarRef = useRef(null);


    const chats = [
        { id: 1, name: 'Chat 1', lastMessage: 'Last message from Chat 1', time: '3:31 PM', img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" },
        { id: 2, name: 'Chat 2', lastMessage: 'Last message from Chat 2', time: '1:51 PM', img: "https://img.freepik.com/free-photo/front-view-smiley-woman-with-earbuds_23-2148613052.jpg" },
        { id: 3, name: 'Chat 3', lastMessage: 'Last message from Chat 3', time: '12:15 PM', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_Hsoe9Z97ZNWqMJ3QQRlPvHVOrHPHdbIsA&s" },
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



    return (
        <div
            ref={sidebarRef}
            className="h-screen border-r  border-gray-200 overflow-y-auto relative"
            style={{ width }}
        >



            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <label htmlFor="my-drawer" >
                    <div className='relative cursor-pointer'>
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
                {chats.map((chat) => (
                    <li key={chat.id} className="px-4 py-2 hover:bg-gray-200 ">
                        <Link to={`/chat/${chat.id}`} className="flex justify-between items-center">
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img src={chat.img} className='rounded-full w-12 h-12' alt="" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">{chat.name}</div>
                                    <div className="text-sm text-gray-400">{chat.lastMessage}</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className="text-sm text-gray-500">{chat.time}</div>

                                <div className='bg-black text-white bg-opacity-25 rounded-full  flex justify-center px-1 py-1  text-xs'>
                                    432
                                </div>

                            </div>

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
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-6">
                        <DrawerItems />
                    </ul>
                </div>
            </div>
            <div className='absolute bottom-0 p-4'>
                <h1 className='text-gray-400'>Telegram Clone</h1>
                <p className='text-gray-400'><small>Md Moniruzzaman Monir</small></p>
            </div>
        </div >
    );
};

export default Sidebar;
