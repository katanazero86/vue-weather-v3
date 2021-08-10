export function convertUnixTimestampIntoDateFormatting(targetUnixTimestamp): string {
    const date: Date = new Date(targetUnixTimestamp * 1000);
    return Intl.DateTimeFormat('ko-KR', {dateStyle: 'medium', timeStyle: 'medium'}).format(date);
}
