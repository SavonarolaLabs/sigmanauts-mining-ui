export function timeSince(date: Date): string {

    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        const i = Math.floor(interval)
        return i == 1 ? i + " year" : i + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        const i = Math.floor(interval)
        return i == 1 ? i + " month" : i + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        const i = Math.floor(interval)
        return i == 1 ? i + " day" : i + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        const i = Math.floor(interval)
        return i == 1 ? i + " hour" : i + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        const i = Math.floor(interval)
        return i == 1 ? i + " minute" : i + " minutes";
    }
    const i = Math.floor(seconds)
    return i == 1 ? i + " second" : i + " seconds";
}