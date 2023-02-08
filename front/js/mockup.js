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
  floatbar: function () {
    $('.main .floating-menu-bar a').click(function () {
      const $this = $(this);
      if ($this.hasClass('on')) return;
      //lottie
      const $oldOn = $('.floating-menu-bar .on');
      const $oldLottieEl = $oldOn.find('.lottie');
      if ($oldLottieEl.length) {
        const $oldLottie = $oldLottieEl.data('lottie-opt');
        // $oldLottie.goToAndPlay(35, true);
        // $oldLottie.goToAndStop(0, true);
        $oldLottie.playSegments([35, 70], true);
      }

      $(this).addClass('on').siblings().removeClass('on');
      const $newOn = $(this);
      const $newLottieEl = $newOn.find('.lottie');
      if ($newLottieEl.length) {
        const $newLottie = $newLottieEl.data('lottie-opt');
        $newLottie.playSegments([0, 35], true);
      }

      //contents
      const $idx = $this.index();
      const $headTit = $('#header h1');
      const $headBtn = $('.head-right .button');
      const $include = $('._include');
      $headTit.eq($idx).removeClass('hide').siblings('h1').addClass('hide');
      if ($idx === 4) $headBtn.last().removeClass('hide').siblings('.button').addClass('hide');
      else $headBtn.first().removeClass('hide').siblings('.button').addClass('hide');
      const $src = './include/main-' + ($idx + 1) + '.html';
      $include.attr('data-include-html', $src).data('include-html', $src);
      ui.Html.include(ui.reInit);
    });
  },
  init: function () {
    mockup.header();
    mockup.setPinDot();
    mockup.pinInput();
    mockup.floatbar();
  }
};
