import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '@shared/models/company-model';
import { PopupComponent } from '../popup/popup.component';

@Component({
	selector: 'app-company-list',
	templateUrl: './company-list.component.html',
	styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
	companyList: Company[] = [];
	displayColumns = ['id', 'name', 'empcount', 'revenue', 'address', 'isActive', 'action'];

	constructor(private readonly dialog: MatDialog) {}

	openPopup(id: any): void {
		this.dialog.open(PopupComponent, {
			width: '500px',
			exitAnimationDuration: '1000ms',
			enterAnimationDuration: '1000ms',
			data: {
				id: id
			}
		});
	}
}
