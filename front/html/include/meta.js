(function () {
  let str = '';
  str += '<meta charset="utf-8" />';
  str += '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />';
  str += '<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover" />';
  str += '<link rel="shortcut icon" type="image/x-icon" href="../../images/favicon.png" />';
  str += '<meta property="og:image" content="https://dev-mydata.mykkl.com/mydata/resources/static/images/og_image_1200x630.png" />';
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
