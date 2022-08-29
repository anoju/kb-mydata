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
- 프로젝트 루트 경로에 .vscode 폴더를 생성 후 settings.json파일을 만들어서 그안에 복붙
- 해당 폴더 및 파일은 git에는 따로 올리지 않는다.

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
<https://yoksel.github.io/url-encoder/>   
해당경로로 접속 후 'Insert SVG'에 svg 소스 복붙하면 확인가능하다