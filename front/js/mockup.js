$(function () {
  mockup.init();
});

mockup = {
  header: function () {
    $('button.head-back').click(function () {
      history.back();
    });
  },
  init: function () {
    mockup.header();
  }
};
