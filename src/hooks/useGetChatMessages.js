import { useQuery } from "@tanstack/react-query";
import { getChatMessages } from "../api/getChatMessagesApi";

export const useGetChatMessages = (chat_id) => {
    return useQuery({
        queryKey: ["chatMessages", chat_id],
        queryFn: () => getChatMessages(chat_id),
        enabled: !!chat_id, // Only fetch if chat_id is provided
    });
};
