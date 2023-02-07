$(function () {
  mockup.init();
});

mockup = {
  header: function () {
    $('button.head-back').click(function () {
      history.back();
    });
  },
  setPinDot: function () {
    const $password = $('.dot-password');
    $password.each(function () {
      const $this = $(this);
      const $input = $this.find('input');
      const $maxlength = parseInt($input.attr('maxlength'));
      const $dot = $this.find('.dot');
      const $dotlength = $this.find('.dot').length;
      if ($dotlength < $maxlength) {
        const $add = $maxlength - $dotlength;
        let $html = '';
        for (let i = 1; i <= $add; i += 1) {
          $html += '<i class="dot"></i>';
        }
        $this.append($html);
      } else if ($dotlength > $maxlength) {
        const $lastIdx = $dotlength - $maxlength - 1;
        $dot.eq($lastIdx).nextAll().remove();
      }
    });
  },
  pinInput: function () {
    $('.dot-password input').on('input', function () {
      const $this = $(this);
      const $val = $this.val();
      const $wrap = $this.closest('.dot-password');
      const $dot = $wrap.find('.dot');
      if ($val.length) {
        const $on = $dot.eq($val.length - 1);
        $on.addClass('on').prevAll().addClass('on');
        $on.nextAll().removeClass('on');
      } else {
        $dot.removeClass('on');
      }
    });
  },
  init: function () {
    mockup.header();
    mockup.setPinDot();
    mockup.pinInput();
  }
};
