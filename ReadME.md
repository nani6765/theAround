# TheAround

TheAround - 과제

1. 두개의 페이지를 생성힐 것
2. header를 꾸밀 것
3. 하나의 페이지에서 WebView를 보여줄 것 (상호작용은 하지 않아도 됨)

## 시작하기

- yarn install
- yarn start
- 안드로이드 환경에서 실행 시 안드로이드 스튜디오 가상머신이 필요합니다.
- ios 환경에서 실행 시 xcode가 필요합니다.
- web 환경에서 실행 시 webView는 동작하지 않습니다.

### Project Info

1. mainPage에서는 간단한 todo-list를 보여주었습니다.
2. async-storage와 recoil을 사용하여 custom hook으로 데이터를 핸들링합니다.
3. 모든 stylesheet는 style에 위치해 있습니다.
4. 처음에는 유저에게 입력값을 받아, 그 값에 해당하는 페이지를 웹뷰로 보여주는 것으로 기획하였으나, react-native의 특성상 페이지가 캐쉬되고 있으며 웹뷰가 랜더링 된 이후로는 useEffect 훅이 동작되지 않아 todo-list를 보여주는 것으로 변경했습니다.
