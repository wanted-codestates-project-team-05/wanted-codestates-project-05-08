## Description

원티드 프리온보딩 코스에서 프로젝트로 **충청북도 휴앙림 중 마음에 드는 곳을 저장하는 서비스** 모바일 웹페이지를 개발하였습니다.
이 페이지는 시작화면, 전체 데이터 목록 조회 화면으로 있으며, 데이터 목록 조회 시 api가 호출되고 목록은 무한 스크롤로 조회됩니다. 유저가 휴양림 목록 중에 선택하여 메모를 남기고 저장하면 첫 화면에 저장한 장소 리스트가 나오게 됩니다. 

* 주요 기능 <br>
  * 휴양림 데이터 조회는 한번에 10개씩 무한 스크롤로 조회
  * 유저는 이름, 주소, 메모 중 하나를 선택해 검색 가능
  * 유저가 휴양림을 저장할 때 메모를 반드시 작성
  * 데이터 저장 브라우저 로컬 스토리지에 저장
  * 저장된 정보 중 하나를 선택해 수정 혹은 삭제 가능

 <br>

## Usage(자세한 실행 방법)

1. git clone
```
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-08.git
```

2. wanted_pre_onboarding 폴더를 인터프린터나 컴파일러로 열기
3. 필요한 라이브러리 설치

```
npm install
```

4. 실행

```
npm run start
```

5. 모바일 웹 페이지 확인
   chrome 브라우저에서 f12 로 개발자도구를 열고, 기준 모바일 화면크기 iphoneXR(414\*896)로 페이지를 랜더링합니다. maxwidth를 800px로 잡았으며, iphone SE(375\*667) 과 tablet(768\*1024) 화면에서도 반응형 디자인을 구현하였습니다.


**<참고화면>**

<img width="1440" alt="웹페이지이미지" src="https://user-images.githubusercontent.com/54584337/158796571-845e4ba6-38e4-42ee-9ae5-a7edbf44249a.png">

## 기술스택

- React.js 사용
- React-router 페이지 이동
- Redux Toolkit로 상태관리 (저장, 수정, 삭제)
- CSS는 styled-component를 사용하여, theme로 자주 사용하는 변수를 설정해 주었습니다.
- 배포는 netlify 을 이용하여 진행했습니다

<배포링크>
https://wanted-codestates-project-05-08.netlify.app/

<br>


## 구현한 방법과 이유에 대한 간략한 내용
## <승연님>

### 구현한 내용
* src/pages/Home.js
* src/components/Button.js
* src/components/SearchInp.js
* src/components/Selected.js
## 로컬 스토리지 데이터 리스트 화면에 보이게 하고 데이터 정보 검색 기능
- 로컬 스토리지에 데이터 정보가 있으면 메인 화면에 보여줍니다.
- 저장된 데이터가 없을 시에는 화면에 데이터가 없다는 문구가 나옵니다.
- 데이터 리스트의 이름, 주소, 메모 중 하나를 선택하여 검색어를 입력하여 정보를 찾을 수 있습니다.
- 라우터를 넣어 페이지 전환이 됩니다. 
- 검색 시 'Enter' 또는 아이콘 클릭시 검색이 가능합니다.
<br>

<img width="1440" alt="웹페이지이미지" src="https://user-images.githubusercontent.com/54584337/158800895-ccc41989-b7bd-48b3-8e92-0ef584cdbdc5.png">

<img width="1440" alt="gif" src="https://user-images.githubusercontent.com/54584337/158815778-7fd312b0-3e83-4b7c-b995-b23e6e49d0d6.gif">

### 개발 중 어려웠던 점 && 해결

- 검색어를 입력받을 때 로컬에 있는 정보가 있는지 필터를 주기 위해서 includes를 사용하여 글자가 있으면 찾을 수 있게 하였습니다.
- 로컬의 정보가 있는지 확인할때 사용자가 입력한 값에 따라 달라져야 한다는 점이 어려웠습니다. Home.js 에서 props로 넘겨주어 입력한 값을 얻을 수 있었고, 사용자가 입력할때에 찾는 방법은 debounce를 주는 것도 있었지만 사용자가 원하던 검색어와 다를 시에도 리스트 정보가 나오는 것을 방지하고자  onkeypree 이벤트로 Enter 입력이거나 아이콘 클릭시 검색이 되도록 하였습니다.
- 전체 데이터 리스트로 갈 수 있는 페이지로 이동하는 버튼을 하단에 고정을 해야하는데 화면 크기에 따라 전체화면일 경우 원하는 위치에 고정이 안되는 문제가 있었습니다. `display: flex` 로 하고 원하는 아이템을 `flex: none`, 하단으로 고정하기 위해 `margin-top: auto`를 주어 해결해였습니다.

<br>

## <승규님>

### 구현한 내용
* 토스트 메시지 기능 구현
* <img width="704" alt="스크린샷1" src="https://user-images.githubusercontent.com/22316798/158773423-5dfd0ff9-ae2e-453a-8122-a67ec1be4552.gif" >
* <img width="704" alt="스크린샷2" src="https://user-images.githubusercontent.com/22316798/158773461-4e96ee1e-df04-44be-8678-b010f90276da.gif" >
* <img width="704" alt="스크린샷3" src="https://user-images.githubusercontent.com/22316798/158773479-2410518c-ca8b-4880-a88f-add07e351f2f.gif" >
* 토스트 메시지 hooks
* 반응형 토스트, 각종 애니메이션 효과
* 디바운스 hooks

### 어려웠던 점
* 라이브러리를 사용하지 않고 직접 토스트 메시지를 구현했는데 그중 어려웠던 점은 애니메이션 효과였습니다. 사실 애니메이션 효과가 없으면 금방 했곘지만 의지로 해냈습니다. 처음에는 옆에서 나타내는 효과를 줬는데 이 토스트 메시지가 리스트이다 보니 리스트에서 삭제되면 애니메이션이 끊기는 문제가 발생했습니다. 그래서 바로 지우지않고 리스트에 더이상 값이 생기지 않으면 그때 다같이 지우고 애니메이션 효과중에는 height를 0으로 조절하여 그냥 안보이게만 했습니다.
* 여러 페이지에서 사용되어야 했기때문에 hooks로 작업해서 여러 페이지에 붙여줘야하는 작업이 좀 걸렸습니다.
* 버튼 클릭시 토스트 메시지가 리스트에 추가되게 구현을 했었는데 마구마구 누르면 엄청 많이 생기는 단점이 있어서 버튼 클릭당 1번으로 제한하는 효과를 부여하기위해 디바운스를 걸어주는데 어디에 걸어줘야 하는지를 한참 생각했던 적이 있습니다.

<br>


## <수영님>

### 구현한 내용
* src/store


## Redux Toolkit을 이용한 데이터 상태관리
- 여러 목록중 저장하고싶은 목록 상태관리를 위해 리덕스 툴킷을 사용합니다.
- 저장한 목록 중 메모수정, 삭제 메소드에 따라 저장한 목록을 관리 할 수 있습니다.
- 상태관리가 변경 될 때 localstorage에도 저장 해 두어 새로 고침하더라도 저장한 목록을 확인 할 수 있습니다.

<br>

![local](https://user-images.githubusercontent.com/68948735/158766412-c43639e0-2f70-4ff9-9290-45517265aa38.PNG)
### 개발 중 어려웠던 점 && 해결

- 목록에 데이터가 없을 때 localStorage에 빈값까지도 없애는 게 어려웠다.
- 배열로 넣어 주었기 때문에 localStorage에 빈배열만 있을 때 removeItem 메서드를 이용하여 완전히 없애 주었다.

<br>

## <성현님>

### src/service/api.js

## 네트워크 요청

<img width="1440" alt="스크린샷 2022-03-17 오후 2 50 57" src="https://user-images.githubusercontent.com/70502670/158745880-353d0b90-a91c-44c1-8379-bec76e1b6bcd.png">

- axios를 이용해 휴양링 데이터 네트워크 요청 및 response.data 값을 반환하는 함수를 만들었습니다. 
- 에러 코드에 따라 인증 정보 오류/서버 문제 발생 등의 오류를 반환하는 에러 핸들링 함수를 만들었습니다. 
- api 키는 .env 파일에 넣어 외부에 노출되지 않도록 처리하였습니다. 

### src/components/NetworkSample.js

## 비동기 처리 및 에러/로딩 상태 피드백 추가

- 데이터 불러온 후 데이터를 비동기적으로 처리할 수 있는 2가지 함수를 추가했습니다. (return 값 이용, hooks 이용)
- 성능 개선을 위해  useCallback 함수를 사용하고, useState의 setState에서 함수형 할당을 이용했습니다.
- 에러 및 로딩 상태를 핸들링 한 후, 사용자에게 ui 피드백을 제공하도록 개발했습니다.
- 에러 및 로딩 피드백은 자연스러운 애니메이션을 추가하였습니다. 

### src/pages/List.js

## 코드 병합

<img width="250" alt="스크린샷 2022-03-17 오후 2 53 10" src="https://user-images.githubusercontent.com/70502670/158745723-f90dbeae-b3b3-4c63-9330-615a88870df6.png">

-  위에서 개발한 네트워크 요청, 비동기 처리 및 에러/로딩 상태 피드백 추가 코드를 List 컴포넌트에 병합했습니다. 

### 개발 중 어려웠던 점 && 해결


<img width="868" alt="스크린샷 2022-03-16 오후 4 21 52" src="https://user-images.githubusercontent.com/70502670/158745668-f83c386b-7e50-4741-b59a-0844c605a02b.png">

- 중간에 api 를 한번 변경했는데, 변경 전 api 는 CORS 오류가 발생하여 해당 오류를 프록시 미들웨어를 통해 해결했다. 배포 단계의 CORS 오류까지 고려하여 netlify에서 프록시를 지원하도록 프로젝트 세팅도 해주었는데, 변경 후 api는 CORS 오류가 없어서 해당 부분을 삭제했다. 

<br>

## <윤구님>
### src/pages/List.js

- 무한 스크롤을 구현했습니다.
  IntersectionObserver api를 이용하여 요소 제일 아래 div를 관찰하여 div가 화면에 보인다면 api를 호출하도록 하였습니다.
  api를 호출하는 동안 loading spinner를 보이게 했습니다.

![Animation](https://user-images.githubusercontent.com/85268135/158780511-d5231a0b-6b22-4f4c-a313-5545e85a1fc9.gif)
### 개발 중 어려웠던 점 && 해결

- IntersectionObserver api 사용이 처음이라 사용방법을 익히는데 시간이 걸렸습니다. mdn 문서와 구글링을 통해 사용법을 익혀 무한 스크롤을 구현하였습니다.

<br>

## <정민님>
### components/Modal.js

- 휴앙림 저장 폼(모달창)을 구현했습니다.<br>
  UI와 반응형을 적용시켰습니다. 그리고 모달 외부를 클릭 시 모달창이 닫히게 하고, esc를 눌렀을 때도 모달창이 닫히게 해주었습니다. 메모가 없을 경우는 저장이 되지 않고, 저장,수정,삭제 시 팀원이 만들어 준 리덕스 store를 활용해 로컬스토리지에 저장되게 연결 해주었습니다.
  <br>
  <img width="300" alt="스크린샷 2022-03-17 오후 7 24 41" src="https://user-images.githubusercontent.com/56882147/158789394-1b59685a-fc2d-4ef7-b634-cd0f16698a61.png">
  <br>
  <img width="300" alt="스크린샷 2022-03-17 오후 7 24 49" src="https://user-images.githubusercontent.com/56882147/158789405-4cb676bc-e0ff-4b50-b91a-7cc8ca9ebc2f.png">
  <br>

### 개발 중 어려웠던 점 && 해결

- 모달창을 구현하고 팀원들이 만들어 놓은 파트와 합치는 부분에서 어려움이 있었습니다. <br>
  list에서 받아오는 데이터와 제가 리덕스에 제공해야 하는 데이터의 key 값이 다르거나, 토스트 연결 시 원화는 화면에 출력이 되지 않아 해당 기능을 구현한 팀원들과 라이브 코딩을 하며 하나씩 수정해 나갔습니다.