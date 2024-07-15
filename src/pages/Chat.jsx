import { useParams } from 'react-router-dom';
import { useGetChatMessages } from '../hooks/useGetChatMessages';
import { formatTime } from '../utils/formatTime';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ui/ThemeToggler';  // Import the useTheme hook

const ChatPage = () => {
    const { chatId } = useParams();
    const { data: messagesData, isLoading, isError } = useGetChatMessages(chatId);
    const { theme } = useTheme();  // Get the current theme

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching messages: {isError.message}</p>;

    const messages = messagesData?.data;

    return (
        <motion.div
            className="chat-page h-full p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-xl font-bold mb-4">Chat Messages</h1>
            <ul className="space-y-4">
                {messages.map((message, index) => (
                    <motion.li
                        key={message.id}
                        className={`chat ${message.sender_id === 1 ? 'chat-end' : 'chat-start'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
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
        </motion.div>
    );
};

export default ChatPage;
