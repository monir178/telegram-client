import axios from "axios";

export const getChatMessages = async (chat_id) => {
    const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chat_id}`);
    return response.data;
};
