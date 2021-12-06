const convertDate = (_date) => {
    const [day, date, month, year] = [
        _date.getDay() + 1,
        _date.getDate(),
        _date.getMonth() + 1,
        _date.getFullYear(),
    ]

    return {
        day,
        date: `${date}/${month}/${year}`,
    }
}

export const getDateOfWeek = () => {
    const result = []
    let dateNow = new Date()

    for (let i = 0; i < 7; i++) {
        const temp = convertDate(dateNow)
        result.push(temp)
        dateNow.setDate(dateNow.getDate() + 1)
    }
    return result
}
