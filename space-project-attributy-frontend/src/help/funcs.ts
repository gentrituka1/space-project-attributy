export function getDate(date: string){
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    if(month < 10) return `${day}/0${month}/${year} ${hours}:${minutes}`;
    if(day < 10) return `0${day}/${month}/${year} ${hours}:${minutes}`;
    if(hours < 10) return `${day}/${month}/${year} 0${hours}:${minutes}`;
    if(minutes < 10) return `${day}/${month}/${year} ${hours}:0${minutes}`;
    const time = `${day}/${month}/${year} ${hours}:${minutes}`;
    return time;
}
