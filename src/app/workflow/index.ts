import { Component, Output, EventEmitter } from '@angular/core';
import { Router }   from '@angular/router';
import { WorkService } from './services/index';
import { WorkModel as Work} from './models/index';

@Component({
	selector: 'work-flow',
	templateUrl: './app/components/workflow/view/index.html',
	styleUrls: ['./app/components/workflow/view/css/index.css'],
	providers: [WorkService]
})
export class Workflow { 
	@Output() userUpdated = new EventEmitter();
	private router:Router;
	public works;
	public showLineBar: boolean;
	public currentProject:Work;
	
	constructor(private _router: Router, private _workService: WorkService) {
		this.router = _router;
		this.showLineBar = true;
		this.currentProject = undefined;
		this.works = _workService.getAllWorks();
	}
	close(){
		this.showAllProjects();
		this.userUpdated.emit() || this.router.navigateByUrl('/interview');
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