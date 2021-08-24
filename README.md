# vue-weather-v3

---

> ### Weather app 소개 <br/>
> Vue.js, Vuex, Vue-router, ApexChart.js, HTML5, CSS3, Vite, SCSS
> - Owner & Maintainer
> - github. [https://github.com/katanazero86/vue-weather-v3](https://github.com/katanazero86/vue-weather-v3)
> - Vite 를 이용하여 프로젝트 생성(Node.js >= 12.0.0) : https://vitejs.dev/
> - 원하는 도시를 선택하면, openweathermap 서비스(https://openweathermap.org/api) 에서 날씨를 조회 후 표시 합니다. 날씨는 현재 날씨와 시간별 날씨예보(4일치) 정보를 조회 합니다.

---

> - 프로젝트 실행방법(execution)
> ```
> node moudle install : npm i or npm install
> dev : npm run dev
> build : npm run build
> ```

---

> ### project 배포(deploy) <br/>
> - https://www.heroku.com/ - 헤로쿠 클라우드 플랫폼을 이용하여 배포
> - 헤로쿠 배포를 위한 express 서버 모듈 설치 및 server/server.js 작성
> - 헤로쿠가 서버를 실행할 수 있도록, package.json 스크립트 추가(`"start": "node ./server/server.js"`)
> - https://zero86.herokuapp.com

---

> ### 구조 및 규약

```
/src/assets : icons, images, scss 정적자원을 관리하는 폴더
/src/components : Vue 컴포넌트를 관리하는 폴더
/src/pages : Vue 컨테이너 컴포넌트를 관리하는 폴더
/src/hooks : Vue 커스텀훅을 관리하는 폴더
/src/router : Vue-router
/src/store : Vuex store
/src/utils : 유틸리티 JS 코드들을 관리
/src/apis : api 관련한 코드들을 관리

- 컴포넌트(*.vue)명은 대문자로 시작(Index.vue or About.vue)
- Vuex action 함수명 접미사는 **Action
- API 메서드 접두사
  조회 : find**
  생성 : create**
  수정 : update**
  삭제 : delete**

```
