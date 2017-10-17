import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  constructor(private _translateService: TranslateService) { }
  public active: boolean;
  ngOnInit() {
  }
  switchLanguage( lang: string) {
  	this.active = !this.active;
  	this._translateService.use(lang);
  }
}
