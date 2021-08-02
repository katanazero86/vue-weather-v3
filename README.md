# vue-weather-v3

## 프로젝트 생성
- Vite 를 이용하여 프로젝트 생성(Node.js >= 12.0.0) : https://vitejs.dev/
- Vite 는 ESM 을 통해서 소스코드를 제공, 빌드시에는 Rollup.js 를 통해서 번들링을 제공(개발시, 번들링 작업을 하지 않기때문에 실행이 빠르다)

```
npm init vite-app <project-name>
```

- SCSS 적용
```
npm i -D sass
```

- TypeScript 적용(모듈 설치 후, tsconfig.json 생성 및 작성)
- /src/shims-vue.d.ts 생성 미 작성

```
npm i -D typescript
```

- vue-router 적용(모듈 설치 후, /src/router/index.ts 생성 및 작성)
- main.js 에 router 추가
```
npm i -S vue-router@next
```


- scss 나누기 연산이 최신버전에서는 없어진다고 하여 아래와 같이 해결
```
npm install -g sass-migrator
sass-migrator division **/*.scss

scss 부분
100% / 1 -> math.div(100%, $grid-cols-num);
```
