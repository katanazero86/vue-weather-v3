import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

/**
 * 해당 날짜 유틸은 dayjs 에 의존성을 가지고 있습니다.
 */

export const dateUtils = {
    /**
     * 유닉스 타임스탬프를 날짜 문자열 형식으로 변환
     * @param targetUnixTimestamp (seconds)
     * @param formatString
     */
    convertUnixTimestampIntoDateFormatting(targetUnixTimestamp: number, formatString = 'YYYY-MM-DD HH:mm:ss'): string {
        return dayjs.unix(targetUnixTimestamp).format(formatString);
    },

    /**
     * 유닉스 타임스탬프를 Date 객체로 변환
     * @param targetUnixTimestamp (seconds)
     */
    convertUnixTimeStampIntoDate(targetUnixTimestamp: number): dayjs.Dayjs {
        return dayjs.unix(targetUnixTimestamp);
    }
};
