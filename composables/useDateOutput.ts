import { ISO8601String } from "aws-sdk/clients/ssm"

const months = {
    1: 'января',
    2: 'февраля',
    3: 'марта',
    4: 'апреля',
    5: 'мая',
    6: 'июня',
    7: 'июля',
    8: 'августа',
    9: 'сентября',
    10: 'октября',
    11: 'ноября',
    12: 'декабря',
}
export default function(iso: ISO8601String): string {
    const arr = iso.substring(0,10).split('-')
    if (arr[2][0] == '0') arr[2] = arr[2].slice(1)
    return `${arr[2]} ${months[arr[1]]} ${arr[0]}`
}