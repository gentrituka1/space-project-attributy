export function getDate(date: string){
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();
    if(seconds < 10 && minutes < 10 && hours < 10 && day < 10 && month < 10) return `0${day}/0${month}/${year} 0${hours}:0${minutes}:0${seconds}`;
    
    const time = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return time;
}
