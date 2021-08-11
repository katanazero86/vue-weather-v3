import moment from 'moment-timezone';
const KOREA_TIME_ZONE = 'Asia/Seoul';

/**
 * 해당 날짜 유틸은 moment.js 에 의존성을 가지고 있습니다.
 */

/**
 * 유닉스 타임스탬프를 날짜 문자열 형식으로 변환
 * @param targetUnixTimestamp
 * @param formatString
 * @return string
 */
export function convertUnixTimestampIntoDateFormatting(targetUnixTimestamp, formatString = null) {
    if (formatString && formatString.trim() !== '') {
        // formatString = 'yyyy-mm-dd hh:mm:ss' or 'yyyy-MM-dd HH:mm:ss' or etc.
        return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).format(formatString);
    }

    return Intl.DateTimeFormat('ko-KR', {dateStyle: 'medium', timeStyle: 'medium', timeZone: KOREA_TIME_ZONE}).format(new Date(targetUnixTimestamp * 1000));
}

/**
 * 유닉스 타임스탬프를 Date 객체로 변환
 * @param targetUnixTimestamp
 * @return {Date}
 */
export function convertUnixTimeStampIntoDate(targetUnixTimestamp) {
    return moment.unix(targetUnixTimestamp).tz(KOREA_TIME_ZONE).toDate();
}
