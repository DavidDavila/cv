import { Injectable } from '@angular/core';
import { ALLWORKS } from './mocks/mock.works';

@Injectable()

export class WorkService{
	getAllWorks(){
		return ALLWORKS;
	}
	findWork(i){
		return this.getAllWorks()[i];
	}
}