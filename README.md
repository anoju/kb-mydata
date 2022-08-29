# mydata

## html 마크업(퍼블리싱) 참고사항

> 사용 에디터 : vscode   
> <https://code.visualstudio.com/>

1. Live Sass Compiler (필수) - scss 컴파일러   
<https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass>

2. Live Server (필수) - live 로컬서버(html용)   
<https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>

3. prettier (선택) - 소스코드 정리   
<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

4. HTMLHint (선택) - 마크업 문법 검사   
<https://marketplace.visualstudio.com/items?itemName=ctf0.htmlhint>
   
   
> **퍼블용 vscode 환경설정**
- 프로젝트 루트 경로에 .vscode 폴더를 생성 후 settings.json파일을 만들어서 그안에 복붙하면 됩니다.
- 해당 폴더 및 파일은 git에는 따로 올리지 않습니다.

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

> **svg 이미지를 소스코드(bg)로 전환**   
> <https://yoksel.github.io/url-encoder/>   
- 해당경로로 접속 후 'Insert SVG'에 svg 소스 복붙하면 확인가능합니다.

> **스타일시트(css) 작성규칙**
- css 파일을 사용하지 않고 scss 파일을 사용합니다.<br />**'Live Sass Compiler'** 확장프로그램으로 scss파일을 css파일로 컴파일해서 사용하면됩니다.
- 실서버에는 front.min.css 파일만 배포하며<br />scss 파일 및 front.css.map 파일은 실서버에 배포하지않아도 됩니다.
- 일부 단색의 아이콘의 경우 이미지를 직접사용하지 않고<br />소스코드 (위 'svg 이미지를 소스코드(bg)로 전환' 참고) 로 변환하여<br />scss파일에서 직접사용합니다.
- 단위는 px를 사용하지않고 rem으로 작성합니다.

> **자바스크립트(js) 작성규칙**
- ui-front.js 만 퍼블리싱에서 작성한 js파일 입니다.<br />그 이외 파일은 라이브러리 이거나 개발팀에서 작성한 내용입니다.
- html파일에도 일부 자바스크립트가 되어있습니다.
- 공통(다수사용)의 여지가 있는 스크립트는 ui-front.js에 작성,<br />단발성 스크립트는 html파일에 작성 하였습니다.

> **퍼블리싱 산출물**   
> <https://anoju.github.io/kyobo-mydata-pub/pub/index.html>   
- front화면 디자인(피그마)기반으로 만들어졌습니다.
- front는 별도의 퍼블가이드 html이 있습니다.<br />위링크에서 확인가능합니다.
- front 퍼블가이드 중 최대한 기능 및 확정성 위주로 만들어져있기때문에    사용되지 않은 디자인 및 기능도 존재합니다.
- admin화면은 부트스트랩기반(v4.6.1)으로 만들어졌습니다.
- admin의 가이드 화면은 부트스트랩에서 갖고온것입니다.
- 디자인없이 퍼블에서 진행하였고 일부는 직접 제작하였습니다.<br />admin은 디자인 산출물이 없습니다.