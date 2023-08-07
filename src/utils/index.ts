export const calculateViewAmout = (length: number) => {
    if (length < 10) return 0.2
    else if (length < 20) return 0.1
    else return 0.005
}

export const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]