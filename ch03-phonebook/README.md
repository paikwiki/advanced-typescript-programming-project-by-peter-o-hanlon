# 03. 리액트 부트스트랩으로 개인 주소록 만들기

작은 리액트 컴포넌트로 개인 주소록의 사용자 인터페이스(UI)를 만드는 방법을 살펴본다.

## 3장에서 다루는 내용

- [ ] 가상 레이아웃으로 레이아웃 확인
- [ ] 리액트 애플리케이션 생성
- [ ] tslint로 코드 분석과 코드 포매팅(code formatting)
- [ ] 부트스트랩 지원 추가
- [ ] 리액트 컴포넌트에서 tsx 사용
- [ ] 리액트의 App 컴포넌트
- [ ] 개인별 상세 UI 표시
- [ ] 바인딩으로 업데이트 단순화
- [ ] 검증자를 만들어 검증 적용
- [ ] 리액트 컴포넌트 검증
- [ ] IndexedDB 데이터베이스 생성과 데이터 전송

## 참고

책에서는 `create-react-app` 실행시 `--scripts-version=react-scripts-ts`를 사용하고 있는데, 아래처럼 deprecated 메시지가 출력된다.

```text
✔ The react-scripts-ts package is deprecated. TypeScript is now supported natively in Create React App. You can use the --template typescript option instead when generating your app to include TypeScript support. Would you like to continue using react-scripts-ts?
```

교재와 환경을 맞추기 위해 `--template typescript`대신 책에 나온 옵션을 사용하려 했으나 `public` 에셋, `tsconfig.json` 등 앱 생성시점의 오작동이 있어 새로운 방식으로 시작했다.
