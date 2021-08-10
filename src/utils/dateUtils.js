import moment from 'moment-timezone';

const KOREA_TIME_ZONE = 'Asia/Seoul';

export function convertUnixTimestampIntoDateFormatting(targetUnixTimestamp, formatString = null) {
    if (formatString && formatString.trim() !== '') {
        return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).format(formatString);
    }

    return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).format('YYYY-MM-DD HH:mm:ss');
}

export function convertUnixTimeStampIntoDate(targetUnixTimestamp) {
    return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).toDate();
}
