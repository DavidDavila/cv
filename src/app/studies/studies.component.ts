import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
	@Output() userUpdated = new EventEmitter();
	private router:Router;
	public education;

  constructor(private _router: Router) { }

  ngOnInit() {

  }
  close(){
	this.userUpdated.emit() || this._router.navigateByUrl('/menu');
}

}
