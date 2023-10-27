import { Component, OnInit } from '@angular/core';
import { CONFIG } from 'config';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sections = Object.values(CONFIG.sections).map(({ title, url }) => ({
    title,
    url,
  }));
  constructor() {}

  ngOnInit() {}
}
