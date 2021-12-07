const convertDate = (_date) => {
    let [day, date, month, year] = [
        _date.getDay() + 1,
        _date.getDate(),
        _date.getMonth() + 1,
        _date.getFullYear(),
    ]

    date = pad(date + 0)
    month = pad(month + 0)

    return {
        day,
        date: `${date}/${month}/${year}`,
    }
}

const getAllDayOfWeek = () => {
    const result = []
    let dateNow = new Date()

    for (let i = 0; i < 7; i++) {
        const temp = convertDate(dateNow)
        result.push(temp)
        dateNow.setDate(dateNow.getDate() + 1)
    }
    return result
}

function timestrToSec(timestr) {
    var parts = timestr.split(':')
    return parts[0] * 3600 + parts[1] * 60
}

function pad(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return '' + num
    }
}

function formatTime(seconds) {
    return [
        pad(Math.floor(seconds / 3600)),
        pad(Math.floor(seconds / 60) % 60),
    ].join(':')
}

// startTime: 06:00, endTime 22:00
const getRangeTime = (_startTime, _endTime) => {
    let start = _startTime
    let end = ''
    const ranges = []
    do {
        ranges.push(start)
        end = formatTime(timestrToSec(start) + 30 * 60) // start: 06:00 -> end: 06:30
        start = end
    } while (end !== _endTime)
    return ranges
}

export { getAllDayOfWeek, timestrToSec, formatTime, getRangeTime }
