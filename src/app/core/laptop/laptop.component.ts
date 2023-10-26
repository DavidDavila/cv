import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'laptop-component',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LaptopComponent implements AfterViewInit {
  @ViewChild('laptop', { static: true }) laptop!: ElementRef;
  toggleLaptop: boolean = false;
  keyboardKeys: any[] = new Array(64);
  shapes: any[] = new Array(14);

  constructor(private laptopService: LaptopService) {
    this.laptopService.toggleLaptop$.subscribe((toggle) => {
      this.toggleLaptop = toggle;
    });
  }

  ngAfterViewInit() {
    this.laptopService.start(this.laptop);
  }
}
