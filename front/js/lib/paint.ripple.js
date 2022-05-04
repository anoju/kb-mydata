registerPaint('ripple', class {
  static get inputProperties() {
    return [
      'background-color',
      '--ripple-color',
      '--ripple-tick',
      '--ripple-x',
      '--ripple-y',
      '--ripple-speed'
    ];
  }

  paint(ctx, geom, props) {
    const maxTick = 1000;
    const bgColor = props.get('background-color').toString();
    const rippleColor = props.get('--ripple-color').toString();
    const x = parseFloat(props.get('--ripple-x').toString());
    const y = parseFloat(props.get('--ripple-y').toString());
    const speed = parseFloat(props.get('--ripple-speed').toString());
    let tick = speed * parseFloat(props.get('--ripple-tick').toString());
    if (tick < 0) {
      tick = 0;
    }
    if (maxTick < tick) {
      tick = maxTick;
    }
    const tickProgress = tick / maxTick;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, geom.width, geom.height);

    ctx.fillStyle = rippleColor;
    ctx.globalAlpha = 1.0 - tickProgress;
    ctx.arc(x, y, geom.width * tickProgress, 0, 2 * Math.PI);
    ctx.fill();
  }
});