# mydata

## html 마크업(퍼블리싱) 참고

### 퍼블리싱프로그램(에디터) : vscode   
> <https://code.visualstudio.com/>   
> Microsoft의 무료 라이센스 프로그램   
> 설치형, 무설치형(포터블) 있습니다.
<br />

### vscode 확장프로그램
1. Live Sass Compiler (필수) - scss 컴파일러   
<https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass>
2. Live Server (필수) - live 로컬서버(html용)   
<https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>
3. prettier (선택) - 소스코드 정리   
<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
4. HTMLHint (선택) - 마크업 문법 검사   
<https://marketplace.visualstudio.com/items?itemName=ctf0.htmlhint>    
5. Git Graph (선택) - vscode에서 git 사용편의성 UP   
<https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph>    

그외 확장프로그램 작업자 취향껏 설치하면 됩니다.   
<br />
   
### vscode 환경설정
- 프로젝트폴더 루트 경로에 .vscode 폴더를 생성 후 settings.json파일을 만들어서 그안에 복붙하면 됩니다.
- 해당 폴더 및 파일은 mydata git서버에는 올리지 않습니다.

```
{
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "~/../css/"
    }
  ],
  "liveSassCompile.settings.autoprefix": [
    "> 2%",
    "last 2 versions"
  ],
  "liveServer.settings.port": 5600,
  "files.eol": "\n",
  "editor.tabSize": 2,

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // "editor.formatOnSave": true,
  "[html]": {
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.printWidth": 9999,
  "prettier.trailingComma":"none",
  "htmlhint.options":{
    "tagname-lowercase": true,
    "attr-lowercase":["viewBox"],
    "attr-value-double-quotes": true,
    "doctype-first": true,
    "tag-pair": true,
    "spec-char-escape": true,
    "id-unique": true,
    "src-not-empty": true,
    "attr-no-duplication": true,
    "title-require": true,
  }
}
```
### (prettier 사용 시) .prettierignore 설정
- 프로젝트 폴더 루트경로에 .prettierignore 생성 후 복붙하면 됩니다.
```
**/node_modules/*
**/*.min.*
**/lib/*
**/mail/*
_font.scss
front.scss
```
<br />


### 파일
- static 폴더안에 파일만 작성 및 수정합니다.
- 폴더 구조는 개발팀과 협의하여 작업되었습니다.
- static > images 폴더안에 guide폴더(guide용) 및 temp폴더(임시용)의 이미지는 <br />디자인팀에 제공받은 이미지가 아니거나 <br />실사용하는 이미지가 아니므로 <br /><u>최대한 사용하지않는게</u> 좋습니다.
- <u>static > pub폴더의 파일들은 코딩리스트(퍼블진행현황리스트) 관련 파일이므로 해당 프로젝트와 크게 상관없습니다.</u><br />배포할 필요도 없습니다.
- static > temp폴더 역시 임시 파일이므로 <br /><u>최대한 사용하지않는게</u> 좋습니다.
- 배포시 실서버에는 front.min.css 파일만 배포하며<br />scss 파일 및 front.min.css.map 파일은 실서버에 배포하지 않아도 됩니다.(배포해도 크게 상관없음)
<br />

### 폰트
- 한글은 noto sans, 숫자는 roboto로 적용되었으며<br />','는 (큰)숫자사이에 들어가는 케이스때문에 roboto로 적용되었습니다.
- noto sans는 웹폰트로써 (용량문제로) 최적화 되어있기때문에 모든 한글케이스에 다 적용되지 않습니다.
- 폰트의 버전은 프로젝트 시작당시 최신버전으로 적용되었습니다.
- 폰트는 디자인상 대부분 Regular, Medium, Bold 폰트로 대부분 사용되었고,<br />일부 매치(결과)화면에서 지마켓 폰트가 사용되었습니다.
<br />

### 마크업 레이아웃
- #wrap > #herder(헤더), #container(컨텐츠) , .popup(팝업) : 푸터는 없음
- 팝업은 #container영역과 마크업이 동일 레벨에 있어야 정상적으로 확인이 가능합니다. <br /> 다른 레벨에 있을경우 해당 팝업이 안보이거나, 다른 팝업이 안보일수도 있습니다.
- .section 으로 좌우 공통 여백 관리
- .full-section 이 #container 바로 아래 있으면 컨텐츠 영역이 꽉차게 되어있습니다.
- 레이어팝업의 경우 풀팝업(full), 모달팝업(modal), 바텀시트(bottom)로 크게 3가지 형태가 있는데.. <br />구조가 모두 동일하므로 클래스만 바꿔주면 팝업 형태가 변경됩니다.
<br />

### 스타일시트(css: Cascading Style Sheets)
- css 파일을 사용하지 않고 scss 파일을 사용합니다.<br /><u>**'Live Sass Compiler'** </u>확장프로그램으로 scss파일을 css파일로 컴파일해서 사용하면됩니다.<br />scss는 CSS Preprocessor(전처리기)로써 scss 자체로는 사용할수 없고<br />반드시 css파일로 컴파일하여야 사용가능합니다.
- 일부 단색의 아이콘의 경우 이미지를 직접사용하지 않고<br />소스코드 ('svg 이미지를 소스코드(bg)로 전환' 참고) 로 변환하여<br />scss파일에서 직접사용합니다.
- 단위는 px를 사용하지않고 rem으로 작성합니다.
- layout에 속하는 #wrap(.page로 대체가능), #header(.page-head로 대체가능), #container(.page-body로 대체가능) 빼고는<br />대부분 클래스(class)명으로 스타일이 적용되어있습니다.
<br />위 ID제외한 나머지 ID값은 바꿔서 사용해도 (스타일적으로) 무방합니다.
- 네이밍기법은 카멜(camelCase), 케밥(kebab-case), 파스칼(PascalCase), 스네이크(snake_case) 중<br />ID 경우 카멜기법, class 경우 케밥기법으로 작성하였습니다.
- class 네이밍의 규칙은 {형태}-{의미}를 기본적으로 하며<br />최종네이밍은 작업자들의 자율성에 작성되었습니다.
- 컴포넌트 요소의 경우 단어가 1개 혹은 2개의 단어를 조합하였고(사용성을 위해),<br />그 이외의 요소는 (중복되지 않고 유니크하게)3단어 이상 조합이 되며,<br />부모 클래스를 상속 받는 경우에도 1개의 단어로 사용된 케이스도 있습니다.
- 인라인, 인터널 css 작성을 최대한 지양하였습니다.<br />예외적으로 숨김처리 되는 요소 경우 인라인스타일로(style="display: none") 작성되었고<br />js나 개발에서 처리해야되는 경우도 일부 인라인 스타일로 작성되었습니다.
- scss 작성시 css 문법 오류가 있으면 css 컴파일에 에러가 발생되어 정상적으로 컴파일 되지 않습니다.<br />수정 후 수정된 내용이 바뀌지 않을때 css 문법을 확인하면 됩니다.
<br />

### svg 이미지를 소스코드(bg)로 전환
> <https://yoksel.github.io/url-encoder/>   
- 해당경로로 접속 후 'Insert SVG'에 svg 소스 복붙하면 확인가능합니다.
<br />

### 자바스크립트(js: JavaScript) 
- ui-front.js 만 퍼블리싱 파트에서 작성한 js파일 입니다.<br />그 이외 파일은 라이브러리 이거나 개발팀에서 작성한 파일입니다.
- 작성된 자바스크립트 내용은 대부분 제이쿼리를 사용하였습니다.
- html파일에도 일부 자바스크립트가 되어있습니다.
- 공통(다수사용)의 여지가 있는 스크립트는 ui-front.js에 작성,<br />단발성 스크립트는 html파일에 작성 하였습니다.
- ui-front.js에서 사용된 함수 중 찾지 못하는 함수 경우 개발팀에서 만든 함수 일 수 있습니다.
<br />

### 라이브러리   
- 차트는 highcharts.js(유료 라이센스)를 사용합니다.   
highcharts - <https://www.highcharts.com/>
- 로띠(lottie)에 사용되는 json 파일은<br />디자인팀에서 (Adobe After Effects 로)제작하여 제공받았습니다.<br />일부 무료라이센스 파일을 사용하였습니다.   
lottie - <https://airbnb.io/lottie>
- pdf뷰어는 웹용 무료라이렌스 라이브러리를 커스텀해서 사용했습니다.   
pdf.js - <https://mozilla.github.io/pdf.js/>
- 기타 라이브러리는 html 산출물 중 '오픈소스 라이선스' html 화면을 참고하면 됩니다.
<br />

### 기타   
- 퍼블리싱에 이미지는 모두 png 파일을 사용하였습니다.<br />향후 움직이는 이미지가 필요할경우 gif보다 apng를 추천드립니다.<br />(gif 이미지 퀄리티 문제)
- 디자인은 피그마로 공유 받았고<br />(피그마에 이미지네이밍규칙이 없었기때문에)<br />이미지 네이밍은 퍼블파트에서 작업자가 직접하였습니다.<br />이미지크기는 3배수(디자인상 이미지크기x3) 작업이 되어있습니다.
- 디자인기준 가로사이즈는 360으로 제공 받았으며<br />대응하는 최소가로 사이즈는 320 입니다.<br />320경우 크게 깨지지않는 선으로 퍼블이 알아서 작업하였습니다.<br />컨텐츠의 최대 가로폭은 1024 입니다.<br />최대 가로폭 경우는 규정된게 없어 퍼블에서 임의로 정하였고<br />브라우저가 가로폭이 그 이상일 경우 센터 정렬하게 되있습니다.
<br />

### 산출물 
> <https://anoju.github.io/kyobo-mydata-pub/pub/index.html>{:target="_blank"}  
- front화면 디자인(피그마)참고하여 작업되었니다.
- front는 별도의 퍼블가이드 html이 있습니다.<br />위링크에서 확인가능합니다.
- front 퍼블가이드 중네는 제 경험기반 최대한으로 기능 및 확정성 위주로 만들어져있기때문에<br />디자인상 없는 디자인과 사용되지 않은 기능도 존재합니다. (예: 달력기능 등등)<br />추후 퍼블가이드상 <u>디자인산출물에 없는 디자인을 쓰게 될 경우</u>(아이콘의 경우 등) <br />새롭게 재디자인을 해서 사용해야합니다.
- front의 로띠(lottie)를 제외 한 대부분의 인터렉션은<br />퍼블파트에서 고려해서 만들었습니다.
<br />

- admin화면은 부트스트랩기반(v4.6.1)으로 만들어졌습니다.
- admin의 가이드 화면은 부트스트랩에서 갖고 온것입니다.
- admin의 경우 개발팀이 참고하는 목적성이 더 크기때문에<br />개발완료된 화면과 약간 상이할 수 있습니다.
- admin은 디자인없이 퍼블에서 자체진행하였기 때문에<br />디자인 산출물이 없습니다.
