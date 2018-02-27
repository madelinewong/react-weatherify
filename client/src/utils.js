
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const convertTimestamp = (seconds) => {
    const d = new Date(seconds * 1000); 
    const year = d.getFullYear();
    const month = d.getMonth();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    return `${month + 1}/${date}/${year} ${hours}:${minutes}`;

}