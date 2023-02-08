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

      switch ($idx) {
        case 0:
          $headTit.text('홈');
          break;
        case 1:
          $headTit.text('매치');
          mockup.main.match();
          break;
        case 2:
          $headTit.text('투자');
          break;
        case 3:
          $headTit.text('마이');
          break;
        case 4:
          $headTit.text('더보기');
          break;
        default:
          break;
      }

      if ($idx === 1) $headTit.append('<button class="button icon pd-5" aria-label="매치 서비스 안내 보기 팝업"><i class="i-ico-header-info"></i></button>');
      else $headTit.find('.button').remove();

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

mockup.main = {
  match: function () {
    let $visual = $('.match-main-visual:visible');
    let $visualTop = 0;
    if ($visual.length) {
      $visualTop = $('#header').length ? $('#header').outerHeight() : 0;
      $visual.css('top', $visualTop);
    }
    const scrollEvt = function () {
      $visual = $('.match-main-visual:visible');
      const $sclTop = $(window).scrollTop();
      if (!$visual.length) {
        return;
      } else {
        $visualTop = $visual.offset().top - $sclTop;
      }
      const $visualImg = $visual.find('.img');
      const $section = $visual.siblings('.section:visible');
      const $sectionTop = $section.offset().top;
      let $sectionRound = $section.data('radius');
      if (!$sectionRound) {
        $sectionRound = parseInt($section.css('border-top-left-radius'));
        $section.data('radius', $sectionRound);
      }
      if ($sclTop === 0) {
        $section.removeAttr('style');
        $visualImg.removeAttr('style');
        $visual.children('div').removeAttr('style');
      } else if ($sclTop < $sectionTop + 20) {
        const $ratio = Math.max(0, Math.min(1, $sclTop / ($sectionTop - $visualTop)));
        $section.css({
          'border-top-left-radius': $sectionRound * (1 - $ratio),
          'border-top-right-radius': $sectionRound * (1 - $ratio)
        });
        // $visualImg.css('transform', 'scale(' + (1 + $ratio / 2) + ')');
        $visualImg.css('top', ($sclTop / 3) * -1);
        // const $opacity = (1 - $ratio) * 0.8 + 0.2;
        const $opacity = 1 - $ratio;
        $visual.children('div').css('opacity', $opacity);
      }
    };
    scrollEvt();
    $(window).scroll(function () {
      scrollEvt();
    });
    $('.user.refresh').on('click', function () {
      const $swiper = $(this).closest('.ui-swiper').data('swiper');
      console.log($swiper);
      $swiper.slideTo(0);
    });
  }
};
