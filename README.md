# Next.js 13
- [생활코딩 강의 참고](https://www.youtube.com/playlist?list=PLuHgQVnccGMCwxXsQuEoG-JJ7RlwtNdwJ)
## Full Stack Web Application Framework
1. SSR(Server Side Rendering)
2. App router
3. Server component

## [프로젝트 구조](https://nextjs.org/docs/getting-started/project-structure)
### src/app/layout.tsx
- 기본적인 웹 페이지의 골격
```agsl
    <html>
      <body>{children}</body>
    </html>
``` 
  - {children}은 src/app/page.tsx 에서 가져옴
  - src/app/globals.css

## 배포 (프로젝트 개발 완료 후)
- 크롬 개발자도구-네트워크 에서 새로고침을 해보면 하단에 6.3MB resources 라고 나옴(서버에서 클라이언트로 전송한 용량이 6.3MB나 된다는 것을 의미)
  - 큰 용량은 비효율적이고 보안에 문제가 될 수 있음
- Node js 기반으로 만들어진 프로젝트들은 package.json 파일에서 "script" 안에 프로젝트를 유지보수하기 위한 명령어들이 있음
- "build" 는 실서버를 위한 배포판을 만드는 명령. "start" 는 배포판을 서비스하기 위한 명령.
  - `npm run build` 입력 후 `npm run start`
  - 배포판으로 실행하면 용량이 크게 줄어들 것임