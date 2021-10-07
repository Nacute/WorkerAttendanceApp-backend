const formatDateTime = (date, isStringMonth = false) => {
    let d = new Date(date),
        month = "" + d.getMonth(),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = d.getHours(),
        minutes = d.getMinutes();

    const stringMonth = [
        "Jan",
        "Febr",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des",
    ];

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (month.length < 2)
        if (isStringMonth) {
            month = stringMonth[month];
        } else {
            month = "0" + month;
        }
    if (day.length < 2) day = "0" + day;

    return isStringMonth ? [day, month, year].join(" ") + " " + hours + " : " + minutes : [year, month, day].join("-");
};

module.exports = formatDateTime;