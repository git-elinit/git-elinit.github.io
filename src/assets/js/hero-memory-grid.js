/* A1 / Soft Memory, adapted from Ellie's approved GSAP interaction lab. */
(() => {
  "use strict";

  const hero = document.querySelector(".hero");
  const canvas = hero?.querySelector(".hero-memory-grid");
  const gsap = window.gsap;
  const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  const touchQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const context = canvas?.getContext("2d");
  if (!hero || !canvas || !context || !gsap || !(pointerQuery.matches || touchQuery.matches) || motionQuery.matches) return;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const pointer = { x: 0, y: 0, tx: 0, ty: 0, lx: 0, ly: 0, speed: 0, lastMove: 0, entered: false };
  const pitch = 44;
  let columns = 0, rows = 0, cells = [], width = 0, height = 0, dpr = 1;
  let originX = 0, originY = 0;
  let ticking = false, visible = true, lastTime = performance.now();
  let touchStart = null, touchTrace = false;

  function stop() {
    if (!ticking) return;
    gsap.ticker.remove(tick);
    ticking = false;
  }

  function start() {
    if (ticking || !visible || motionQuery.matches || !(pointerQuery.matches || touchQuery.matches)) return;
    lastTime = performance.now();
    gsap.ticker.add(tick);
    ticking = true;
  }

  function clear() {
    stop();
    cells.forEach(cell => { cell.value = 0; });
    context.clearRect(0, 0, width, height);
    pointer.entered = false;
    touchTrace = false;
  }

  function resize() {
    const box = canvas.getBoundingClientRect();
    width = Math.max(1, box.width);
    height = Math.max(1, box.height);
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const phase = value => ((value % pitch) + pitch) % pitch;
    originX = -phase(box.left + window.scrollX);
    originY = -phase(box.top + window.scrollY);
    columns = Math.ceil((width - originX) / pitch);
    rows = Math.ceil((height - originY) / pitch);
    cells = Array.from({ length: columns * rows }, () => ({ value: 0 }));
    pointer.entered = false;
    stop();
  }

  function illuminate(radiusLimit) {
    const gx = (pointer.x * width - originX) / pitch - .5;
    const gy = (pointer.y * height - originY) / pitch - .5;
    const radius = radiusLimit ?? clamp(3.2 - pointer.speed * 1.2, 1.7, 3.2);
    const base = clamp(1 - pointer.speed * .24, .6, 1);
    for (let y = Math.max(0, Math.floor(gy - radius)); y <= Math.min(rows - 1, Math.ceil(gy + radius)); y++) {
      for (let x = Math.max(0, Math.floor(gx - radius)); x <= Math.min(columns - 1, Math.ceil(gx + radius)); x++) {
        const distance = Math.hypot(x - gx, y - gy);
        if (distance > radius) continue;
        const strength = base * Math.pow(1 - distance / (radius + .01), 1.7);
        const cell = cells[y * columns + x];
        cell.value = Math.max(cell.value, strength);
      }
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    const gap = width < 560 ? 5 : 7;
    cells.forEach((cell, index) => {
      const value = cell.value;
      if (value < .015) return;
      const size = pitch - gap + value * 2;
      const x = index % columns;
      const y = Math.floor(index / columns);
      const px = originX + x * pitch + (pitch - size) / 2;
      const py = originY + y * pitch + (pitch - size) / 2;
      context.fillStyle = `rgba(143,185,220,${value * .19})`;
      context.fillRect(Math.round(px), Math.round(py), Math.round(size), Math.round(size));
    });
  }

  function tick() {
    if (!visible || motionQuery.matches || !(pointerQuery.matches || touchQuery.matches)) { clear(); return; }
    const now = performance.now();
    const dt = clamp((now - lastTime) / 16.667, .25, 3);
    lastTime = now;
    pointer.x += (pointer.tx - pointer.x) * .16;
    pointer.y += (pointer.ty - pointer.y) * .16;
    if (now - pointer.lastMove < 85) illuminate(touchTrace ? 2.1 : undefined);
    let hasTrace = false;
    const decay = Math.pow(.978, dt);
    cells.forEach(cell => {
      cell.value *= decay;
      if (cell.value >= .015) hasTrace = true;
    });
    draw();
    pointer.speed *= .84;
    if (!hasTrace && now - pointer.lastMove > 85) stop();
  }

  function move(event) {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    const box = canvas.getBoundingClientRect();
    const x = clamp((event.clientX - box.left) / box.width, 0, 1);
    const y = clamp((event.clientY - box.top) / box.height, 0, 1);
    pointer.speed = clamp(Math.hypot(x - pointer.lx, y - pointer.ly) * 20, 0, 2.2);
    pointer.lx = x;
    pointer.ly = y;
    pointer.tx = x;
    pointer.ty = y;
    if (!pointer.entered) { pointer.x = x; pointer.y = y; pointer.entered = true; }
    pointer.lastMove = performance.now();
    touchTrace = false;
    start();
  }

  function touchAt(event, radius) {
    const box = canvas.getBoundingClientRect();
    pointer.x = pointer.tx = clamp((event.clientX - box.left) / box.width, 0, 1);
    pointer.y = pointer.ty = clamp((event.clientY - box.top) / box.height, 0, 1);
    pointer.speed = 0;
    pointer.lastMove = performance.now();
    touchTrace = true;
    illuminate(radius);
    start();
  }

  function touchDown(event) {
    if (event.pointerType !== "touch" || !touchQuery.matches || !visible || touchStart) return;
    touchStart = { id: event.pointerId, x: event.clientX, y: event.clientY, time: performance.now() };
  }

  function touchMove(event) {
    if (event.pointerType !== "touch" || !touchStart || !visible || event.pointerId !== touchStart.id) return;
    touchAt(event, 2.1);
  }

  function touchEnd(event) {
    if (event.pointerType !== "touch" || !touchStart || event.pointerId !== touchStart.id) return;
    const moved = Math.hypot(event.clientX - touchStart.x, event.clientY - touchStart.y);
    if (moved < 12 && performance.now() - touchStart.time < 600 && visible) touchAt(event, 1.8);
    touchStart = null;
  }

  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerleave", () => { pointer.entered = false; pointer.lastMove = 0; });
  hero.addEventListener("pointerdown", touchDown, { passive: true });
  hero.addEventListener("pointermove", touchMove, { passive: true });
  hero.addEventListener("pointerup", touchEnd, { passive: true });
  hero.addEventListener("pointercancel", () => { touchStart = null; }, { passive: true });
  motionQuery.addEventListener("change", () => { clear(); });
  pointerQuery.addEventListener("change", () => { clear(); });
  touchQuery.addEventListener("change", () => { clear(); });
  window.addEventListener("resize", resize, { passive: true });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (!visible) clear();
  }).observe(hero);
  resize();
})();
