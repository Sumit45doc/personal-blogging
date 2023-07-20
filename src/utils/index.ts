export const calculateViewAmout = (length: number) => {
    if(length < 10) return 0.2
    else if (length < 20) return 0.1
    else return 0.005
}