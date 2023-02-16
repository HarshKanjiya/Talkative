export const formateDate = (date) => {
    var hours = new Date(date).getHours()
    var min = new Date(date).getMinutes()
    var mode = "am";
    if (hours > 11) mode = "pm"
    hours = hours % 12
    return `${hours}:${min} ${mode}`
}