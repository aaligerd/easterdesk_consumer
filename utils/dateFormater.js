const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDateForArticles=(dateString)=>{
    const date=new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
}