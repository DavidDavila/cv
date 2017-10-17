export class WorkModel {
	constructor(
		public title:string,
		public company:string,
		public shortName:string,
		public initDate:string,
		public finalDate:string,
		public description:string,
		public tecnologies:Array<string>,
		public projects:Array<any>,
		) {
		
	};
}