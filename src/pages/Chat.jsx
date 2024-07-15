import { useParams } from 'react-router-dom';
import { useGetChatMessages } from '../hooks/useGetChatMessages';
import { formatTime } from '../utils/formatTime';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ui/ThemeToggler';
import { Paperclip, Smile, Mic, MoreHorizontal, Columns } from 'lucide-react';
import { FaPhone } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ChatPage = () => {
    const { chatId } = useParams();
    const { data: messagesData, isLoading, isError } = useGetChatMessages(chatId);
    const { theme } = useTheme();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching messages: {isError.message}</p>;

    const messages = messagesData?.data;
    console.log(messages)
    const senderName = messages && messages.length > 0 ? messages[0].sender.name : '';

    return (
        <motion.div
            className=" flex flex-col h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header Section */}
            <div className={`flex items-center justify-between px-4  py-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} `}>

                <div>
                    <div className='flex items-center gap-2'>
                        <Link to='/' className='md:hidden'>
                            <IoMdArrowBack className="h-6 w-6 text-gray-400 cursor-pointer" />
                        </Link>
                        <h2 className=" font-semibold">{senderName || "Unknown user"}</h2>
                    </div>
                    <p className="text-sm text-gray-400 ml-8 md:ml-0">last seen recently</p>
                </div>
                <div className="flex items-center space-x-4">

                    <IoIosSearch className="h-6 w-6 text-gray-400 cursor-pointer" />
                    <FaPhone className=" text-gray-400 cursor-pointer" />
                    <Columns className="text-gray-400 cursor-pointer" />
                    <MoreHorizontal className="text-gray-400 cursor-pointer" />
                </div>
            </div>

            {/* Messages List */}
            <ul className="space-y-4 flex-1 overflow-y-auto pb-20 px-4 mt-4">
                {messages.map((message, index) => (
                    <motion.li
                        key={message.id}
                        className={`chat ${message.sender_id === 1 ? 'chat-end' : 'chat-start'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <div
                            className="chat-bubble"
                            style={{
                                backgroundColor: theme === 'dark'
                                    ? (message.sender_id === 1 ? '#2b5278' : '')
                                    : (message.sender_id === 1 ? '#effdde' : ''),
                                color: theme === 'dark' && message.sender_id === 1 ? '' : '',
                            }}
                        >
                            <p>{message.message}</p>
                            <p className="text-xs text-right mt-2">{formatTime(message.created_at)}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>

            {/* Input Section */}
            <div className={`flex items-center px-4 py-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} absolute bottom-0 w-full`}>
                <Paperclip className="text-gray-400 mr-2 cursor-pointer" />
                <input
                    type="text"
                    placeholder="Write a message..."
                    className={`flex-1 p-2  ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} focus:outline-none`}
                />
                <Smile className="text-gray-400 mx-2 cursor-pointer" />
                <Mic className="text-gray-400 ml-2 cursor-pointer" />
            </div>
        </motion.div>
    );
};

export default ChatPage;
