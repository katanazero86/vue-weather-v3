export function checkGeolocationSupport(): boolean {
    return 'geolocation' in navigator;
}

export function getCurrentPosition(): Promise<any> {

    const options = {
        enableHighAccuracy: true,
        timeout: 10000, // 10초
        maximumAge: 0,
    };

    if (window) {
        return new Promise<any>(((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        }))

    }
}

export function handleGeolocationError(targetError): string {
    console.log('Error occurred. Geolocation Error code: ' + targetError.code);
    //  error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
    switch (targetError.code) {
        case targetError.PERMISSION_DENIED:
            return '위치정보 조회 권한이 없습니다.';
        case targetError.POSITION_UNAVAILABLE:
            return '위치정보 조회(획득)에 실패하였습니다.';
        case targetError.TIMEOUT:
            return '시간 초과(10초)로 위치정보 조회에 실패하였습니다.';
        default :
            return 'unknown error';
    }

}
