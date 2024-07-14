import { useQuery } from "@tanstack/react-query";
import { getAllChats } from "../api/allChatsApi";

export const useGetAllChats = () => {
    return useQuery({
        queryKey: ['chats'],
        queryFn: getAllChats,
    });
};
