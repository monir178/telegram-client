export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24hr format to 12hr format
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
    return formattedTime;
};
