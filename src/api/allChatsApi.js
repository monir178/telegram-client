import axios from "axios";

export const getAllChats = async () => {
    return await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=1")
};
