(function () {
  let str = '';
  str += '<link href="../../css/front.min.css" rel="stylesheet" />';
  str += '<script type="text/javascript" src="../../js/lib/jquery-3.6.0.min.js"></script>';
  str += '<script type="text/javascript" src="../../js/lib/lodash.min.js"></script>';
  str += '<script type="text/javascript" src="../../js/ui-plugins.min.js"></script>';
  str += '<script type="text/javascript" src="../../js/ui-front.js"></script>';
  document.write(str);
  const $include = document.querySelector('.__include');
  $include.remove();
})();
