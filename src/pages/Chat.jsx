import { useParams } from 'react-router-dom';
import { useGetChatMessages } from '../hooks/useGetChatMessages';
import { formatTime } from '../utils/formatTime';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ui/ThemeToggler';
import { Paperclip, Smile, Mic } from 'lucide-react';

const ChatPage = () => {
    const { chatId } = useParams();
    const { data: messagesData, isLoading, isError } = useGetChatMessages(chatId);
    const { theme } = useTheme();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching messages: {isError.message}</p>;

    const messages = messagesData?.data;

    return (
        <motion.div
            className="chat-page flex flex-col h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-xl font-bold mb-4">Chat Messages</h1>
            <ul className="space-y-4 flex-1 overflow-y-auto pb-20 px-4 pt-8">
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

            <div className={`flex items-center p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}  absolute bottom-0 w-full`}>
                <Paperclip className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Write a message..."
                    className={`flex-1 p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'} focus:outline-none`}
                />
                <Smile className="text-gray-400 mx-2" />
                <Mic className="text-gray-400 ml-2" />
            </div>
        </motion.div>
    );
};

export default ChatPage;
