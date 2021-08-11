import moment from 'moment-timezone';

const KOREA_TIME_ZONE = 'Asia/Seoul';

export function convertUnixTimestampIntoDateFormatting(targetUnixTimestamp, formatString = null) {
    if (formatString && formatString.trim() !== '') {
        return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).format(formatString);
    }

    return Intl.DateTimeFormat('ko-KR', {dateStyle: 'medium', timeStyle: 'medium', timeZone: KOREA_TIME_ZONE}).format(new Date(targetUnixTimestamp * 1000));
}

export function convertUnixTimeStampIntoDate(targetUnixTimestamp) {
    return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).toDate();
}
