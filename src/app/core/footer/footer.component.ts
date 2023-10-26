import { Component, OnInit } from '@angular/core';
import { CONFIG, CONTACT_SECTION } from 'config';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  contactLinks = CONTACT_SECTION.links;
  constructor() {}

  ngOnInit() {}
}
