import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Self,
  ViewChild,
} from '@angular/core';
import { LaptopService } from 'src/app/core/components/laptop/laptop.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss'],
})
export class TecnologiesComponent {
  constructor(private laptopService: LaptopService) {}
}
