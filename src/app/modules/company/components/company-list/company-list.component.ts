import { Component } from '@angular/core';
import { Company } from '@shared/models/company-model';

@Component({
	selector: 'app-company-list',
	templateUrl: './company-list.component.html',
	styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
	companyList: Company[] = [];
	displayColumns = ['id', 'name', 'empcount', 'revenue', 'address', 'isActive'];
}
