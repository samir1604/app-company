import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MainCompanyComponent } from './pages/main-company/main-company.component';

@NgModule({
	declarations: [MainCompanyComponent, CompanyListComponent],
	imports: [CommonModule, CompanyRoutingModule, MaterialModule]
})
export class CompanyModule {}
