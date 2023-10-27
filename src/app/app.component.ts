import { Component, HostListener } from '@angular/core';
import { LaptopService } from './core/components/laptop/laptop.service';
import { SmoothScroll } from './core/utils/smooth-scroll.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  openLaptop: boolean = false;
  duration!: number;
  scrollDistance: any;
  startTime!: number;

  @HostListener('window:scroll', ['$event'])
  checkIfElementIsVisible(event: Event): void {
    if (!window.scrollY && this.openLaptop) {
      this.openLaptop = false;
      this.laptopService.toogle(true);
    } else if (!this.openLaptop) {
      this.openLaptop = true;
      this.laptopService.toogle(false);
    }
  }
  constructor(private laptopService: LaptopService) {
    new SmoothScroll(document.documentElement, 100, 12);
  }
}
