import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private _axes = { x: 0, y: 0 };
  private translateBackground = 0;
  private container!: ElementRef;
  private targetAxes = { x: -30, y: 30 };
  private isAnimating = false;
  private smooth = 0.02;
  private animationDuration = 3000; // Duración de la animación (en milisegundos)
  canMove: boolean = true;
  toggleLaptop$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  toogle(value?: boolean) {
    const oldValue = this.toggleLaptop$.getValue();
    const finalValue = value
      ? value !== oldValue
        ? value
        : !oldValue
      : !oldValue;
    this.toggleLaptop$.next(finalValue);
  }
  start(container: ElementRef) {
    this.container = container;
    this.applyRotation();
    // this.animateRotationConstant();
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event: any) => {
        if (this.canMove) {
          const element = window.getComputedStyle(this.container.nativeElement);
          const initial = {
            x: Number(
              element.getPropertyValue('--rotate-initial-x').replace('deg', '')
            ),
            y: Number(
              element.getPropertyValue('--rotate-initial-y').replace('deg', '')
            ),
          };
          this.targetAxes.x = initial.x - event.gamma / 1.5;
          this.targetAxes.y = initial.y + event.beta / 1.5;

          if (!this.isAnimating) {
            this.animateRotation();
          }
        }
      });
    }
    document.addEventListener('mousemove', (e) => {
      if (this.canMove) {
        const element = window.getComputedStyle(this.container.nativeElement);
        const initial = {
          x: Number(
            element.getPropertyValue('--rotate-initial-x').replace('deg', '')
          ),
          y: Number(
            element.getPropertyValue('--rotate-initial-y').replace('deg', '')
          ),
        };
        console.log(initial);
        const centerX = 0;
        const centerY = 0;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        this.targetAxes.y = deltaY * this.smooth + initial.y;
        this.targetAxes.x = deltaX * this.smooth + initial.x;

        if (!this.isAnimating) {
          this.animateRotation();
        }
      }
    });
  }
  animateRotationConstant() {
    const animate = () => {
      if (this.canMove) {
        this._axes.y += 0.05;
        this.applyRotation();
        requestAnimationFrame(animate);
      }
    };
    if (!this.isAnimating) {
      animate();
    }
  }
  private animateRotation() {
    this.isAnimating = true;
    const startTime = performance.now();

    const updateAxes = (timestamp: number) => {
      const progress = (timestamp - startTime) / this.animationDuration;
      this.translateBackground = this.interpolate(
        this.translateBackground,
        this.targetAxes.x,
        progress
      );

      if (progress < 1) {
        this._axes.x = this.interpolate(
          this._axes.x,
          this.targetAxes.x,
          progress
        );
        this._axes.y = this.interpolate(
          this._axes.y,
          this.targetAxes.y,
          progress
        );

        this.applyRotation();

        requestAnimationFrame(updateAxes);
      } else {
        this._axes.x = this.targetAxes.x;
        this._axes.y = this.targetAxes.y;
        this.applyRotation();
        this.isAnimating = false;
      }
    };

    requestAnimationFrame(updateAxes);
  }

  private applyRotation() {
    Object.entries(this._axes).forEach(([axis, value]) => {
      this.container.nativeElement.style.setProperty(
        `--rotate-${axis}`,
        value + 'deg'
      );
    });
  }

  private interpolate(start: number, end: number, progress: number): number {
    return start + (end - start) * progress;
  }
}
