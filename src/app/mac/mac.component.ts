import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  }   from '@angular/router';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {
	public title : string;
	private sub: any;
  constructor( private _route: ActivatedRoute) {
  	this.sub = this._route.params.subscribe(params => {
  		params['company'] ? this.title = params['company'] : false;		
  	});	
  	}

  ngOnInit() {
  			
  }

}
