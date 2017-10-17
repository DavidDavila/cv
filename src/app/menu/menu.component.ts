import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public classMenu:string;
	public currentView:string;
	constructor() {
		this.classMenu = '';
		this.currentView = '';
	}
	ngOnInit() {
		let body = document.getElementsByTagName('body')[0];
		body.style.height =  null; 
		setTimeout((()=>{this.classMenu = 'open'}).bind(this),0);
	}
	goTo( classMenu:string ){
		this.classMenu += ' ' + classMenu;
		this.currentView = classMenu;
		classMenu === 'right' ?

			history.pushState({},'/studies','/workflow')
			:
			classMenu === 'left' ?
				history.pushState({},'/studies','/studies')
				:
				history.pushState({},'/studies','/myself')
	}
	userUpdated(){
		this.classMenu= 'open';
		this.currentView = '';
	}
}
