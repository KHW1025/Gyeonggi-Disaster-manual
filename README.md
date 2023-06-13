
<img width="800" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/0cd50b64-4ded-412e-a226-64930af0a2f0"/>

# 경기도민 재난안전키트
<br>

> **경기도민을 위한 재난 대응 정보 제공 App**
<br>

## 1️⃣ 목적 & 구성
<br>

> - 사고 대응메뉴얼을 제시하고 부가적인 기능들을 통해서 시민들의 안전의식 향상과 위기 대처능력 향상이 목표.
> - 메뉴얼 데이터를 JSON으로 작성, 가공한 뒤 각종 사고에 따른 메뉴얼 map함수를 통해 분류.
> - 유튜브 Open API를 활용해 "재난 대응 대처 대비 대피"라는 키워드로 검색된 영상중 조회수가 높은 리스트를 제공.
> - YoutubePlayer를 통해 앱 내에서 직접 영상을 시청할 수 있게 함.
> - Google Map API, 경기도 지역의 경찰서/소방서/의료기관의 위도경도를 가진 API를 활용해 지도 위치제공.
> - 재난안전문자 API를 활용, filter함수를 활용해 경기도 지역기반으로 송출된 메세지만 제공.
> - Linking 기능을 활용하여 긴급전화 버튼을 눌렀을 때 해당하는 번호가 다이얼에 찍히도록 함.
<br>

## 2️⃣ 프로젝트 역할
<br>

> - 기획(100%), 디자인(100%), 개발(100%)
<br>

 ## 3️⃣ 프로젝트 사용 툴
 
 ### Communication
 
>![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
>![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
 
 ### Environment
 
> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> 

>![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
> <img src="https://img.shields.io/badge/Android Studio-3DDC84?style=for-the-badge&logo=Android Studio&logoColor=white"/>
> <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white"/>
>![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
>![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             


### Development

> <img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<br>

## 4️⃣ 기획 & 설계 시안
<br>

> - [약식기획서 (figjam)](https://www.figma.com/file/cq3fO1t6ACWHehgb6HzmME/Project6?type=whiteboard&node-id=0%3A1&t=kGcpT1HeiIGHjbcy-1)
> - [설계 시안 (figma)](https://www.figma.com/file/m74GZWpNiNMzqB1jjiPzg4/Project6-%EA%B2%BD%EA%B8%B0%EB%8F%84%EB%AF%BC-%EC%9E%AC%EB%82%9C%EC%95%88%EC%A0%84%ED%82%A4%ED%8A%B8?type=design&node-id=0%3A1&t=GIJbVjxciEZG0fYb-1)
<br>

## 5️⃣ 기능구현 📺
<br>

> - 메뉴얼 데이터를 JSON으로 작성, 가공한 뒤 각종 사고에 따른 메뉴얼 map함수를 통해 분류.
> - 각종 사고대비 메뉴얼을 제시하여 사고를 예방하고 긴박한 상황에서 유연하게 대처할 수 있게 함.
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/37514e40-08fc-4b58-804d-2bb84ad4dea0">
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/8aeaed2f-7d60-430f-a733-7be5cac9a7dc">
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/fa6fea9f-32aa-4104-8f89-8b73b326b1ce">

<br>
<br>

> - 유튜브 Open API를 활용, 실시간으로 ‘재난 대처’ 관련한 유튜브 영상중 조회수가 높은 상위 리스트 영상을 제공.
> - 보다 직관적으로 대처 방법을 익히도록 함.
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/7b47e7ca-f6f6-46fb-b9d7-a855adacdc5b">
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/3287c245-74f9-4c46-9e5c-d53374157c85">
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/423ee6eb-a4b9-4f6c-8558-8b21af609d01">

<br>
<br>

> - 경기도 지역 기반으로한 경찰서, 소방서, 의료기관의 위치를 지도에 표시.
> - 현재위치 기준으로 지도를 볼 수 있는 기능 제공.
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/b0fcfa53-76ef-4ec9-9acb-39af5f40e7ff">

<br>
<br>

> - 국민재난안전포털을 통해 발송된 재난문자중 경기도 지역기반으로 필터링하여 경기도  재난문자 정보 제공.
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/19c8db4f-be1b-44ad-89ab-d074ec5586d3">

<br>
<br>

> - 112, 119, 110 등 버튼을 누르면 전화다이얼 화면에 바로 번호가 적용되어 빠르게 전화가 가능하도록 함.
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/fea87b98-2d11-4094-b616-22150f1ebb4f">
> <img width="250" alt="image" src="https://github.com/KHW1025/Gyeonggi-Disaster-manual/assets/119498531/ea292834-cb06-4d0b-be4e-f0126240fbc6">
