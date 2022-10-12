export default function(iso: string) {
    const diff = Date.now() - Date.parse(iso)
    if (diff > 31536000000) return useDateOutput(iso)
    if (diff > 2419200000) {
        const months = Math.trunc(diff / 2419200000)
        if (months % 10 === 1) return '1 месяц назад'
        if ((months % 10 > 1) && (months % 10 < 5)) return `${months} месяца назад`
        return `${months} месяцев назад`
    }
    if (diff > 604800000) {
        const weeks = Math.trunc(diff / 604800000)
        if (weeks % 10 === 1) return '1 неделю назад'
        return `${weeks} недели назад`
    }
    if (diff > 86400000) {
        const days = Math.trunc(diff / 86400000)
        if (days % 10 === 1) return '1 день назад'
        if ((days % 10 > 1) && (days % 10 < 5)) return `${days} дня назад`
        return `${days} дней назад`
    }
    if (diff > 3600000) {
        const hours = Math.trunc(diff / 3600000)
        if (hours % 10 === 1) return `${hours} час назад`
        if ((hours % 10 > 1) && (hours % 10 < 5))return `${hours} часа назад`
        return `${hours} часов назад`
    }
    if (diff > 60000) {
        const minutes = Math.trunc(diff / 60000)
        if (minutes % 10 === 1) return `${minutes} минуту назад`
        if ((minutes % 10 > 1) && (minutes % 10 < 5))return `${minutes} минуты назад`
        return `${minutes} минут назад`
    }
    if (diff > 1000) {
        const seconds = Math.trunc(diff / 1000)
        if (seconds % 10 === 1) return `${seconds} секунду назад`
        if ((seconds % 10 > 1) && (seconds % 10 < 5))return `${seconds} секунды назад`
        return `${seconds} секунд назад`
    }
}