export class SmoothScroll {
  moving: boolean;
  pos: number;
  delta: number = 0;
  constructor(
    public target: HTMLElement,
    public speed: number = 240,
    public smooth: number = 6
  ) {
    this.moving = false;
    this.pos = this.target.scrollTop;
    this.target.addEventListener('mousewheel', this.scrolled.bind(this), {
      passive: false,
    });
    this.target.addEventListener('DOMMouseScroll', this.scrolled.bind(this), {
      passive: false,
    });
  }

  scrolled(e: Event) {
    console.log(
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    );
    e.preventDefault();

    const delta = this.normalizeWheelDelta(e);

    this.pos += -delta * this.speed;
    this.pos = Math.max(
      0,
      Math.min(this.pos, this.target.scrollHeight - this.target.clientHeight)
    );

    if (!this.moving) {
      this.update();
    }
  }

  normalizeWheelDelta(e: any): number {
    if (e.detail) {
      if (e.wheelDelta) {
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
      } else {
        return -e.detail / 3; // Firefox
      }
    } else {
      return e.wheelDelta / 120; // IE,Safari,Chrome
    }
  }

  update() {
    this.moving = true;

    const delta = (this.pos - this.target.scrollTop) / this.smooth;

    this.target.scrollTop += delta;

    if (Math.abs(delta) > 0.5 && delta !== this.delta) {
      this.delta = delta;
      requestAnimationFrame(this.update.bind(this));
    } else {
      this.moving = false;
    }
  }
}
