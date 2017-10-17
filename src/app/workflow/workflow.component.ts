import { Component, Output, EventEmitter , OnInit} from '@angular/core';
import { Router }   from '@angular/router';
import { WorkService } from './services/index';
import { WorkModel as Work} from './models/index';

@Component({
	selector: 'work-flow',
  	templateUrl: './workflow.component.html',
  	styleUrls: ['./workflow.component.scss'],
	providers: [WorkService]
})
export class WorkflowComponent implements OnInit {
	@Output() userUpdated = new EventEmitter();
	private router:Router;
	public works;
	public showLineBar: boolean;
	public currentProject:Work;
	public className: string;
	constructor(private _router: Router, private _workService: WorkService) {		
		this.showLineBar = true;
		this.currentProject = undefined;
		this.works = _workService.getAllWorks();
	}
	ngOnInit() {
  		}
	close(){
		this.showAllProjects();
		this.userUpdated.emit() || this._router.navigateByUrl('/menu');
	}
	showProject(index){
		this.currentProject = this._workService.findWork(index);
	}
	showAllProjects(){
		this.currentProject = undefined;
	}
	getElement(index, className){
		let projects =(<HTMLScriptElement[]><any>document.getElementsByClassName(className));
		return projects[index];
	}
	over(index, classElement){
		this.getElement(index,classElement).className = classElement+' hover';
	}
	blur(index, classElement){
		this.getElement(index,classElement).className = classElement;
	}

}