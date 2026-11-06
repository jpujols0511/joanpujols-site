(() => {
  const c = document.getElementById('rain');
  if (!c) return;
  const ctx = c.getContext('2d');
  const glyphs = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  let cols, drops, fontSize = 14;
  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    cols = Math.floor(c.width / fontSize);
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  }
  function draw() {
    ctx.fillStyle = 'rgba(10, 15, 10, 0.08)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#336633';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
      ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > c.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  resize();
  draw();
})();
