import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  }   from '@angular/router';

declare var skrollr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public parentRouter: Router;
	public out: boolean;
	public company: number;
	
	constructor(private _router: Router ) {
	}
	ngOnInit() {
		var s = skrollr.init();
	}
	goTo(event: Event){
		event.stopPropagation();
		this.out = true;
		let scrollStep = -window.scrollY / (1000 / 15),
        scrollInterval = setInterval((()=>{
	        if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else {		            
	        	clearInterval(scrollInterval); 
	        	setTimeout((()=>this._router.navigateByUrl('/menu')).bind(this),300);
	        }
	    }).bind(this),7);
	}

}
