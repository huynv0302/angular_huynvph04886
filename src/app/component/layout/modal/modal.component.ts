import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	@Input() modalTitle : string = 'title';
	@Input() modalBody: string = 'Modal body..';
	@Input() modalFooter: string;
	constructor() { }

	ngOnInit() {
		console.log(this.modalBody);
	}

}
