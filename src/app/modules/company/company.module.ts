import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { PopupComponent } from './components/popup/popup.component';
import { MainCompanyComponent } from './pages/main-company/main-company.component';

@NgModule({
	declarations: [MainCompanyComponent, CompanyListComponent, PopupComponent],
	imports: [CommonModule, CompanyRoutingModule, MaterialModule, ReactiveFormsModule]
})
export class CompanyModule {}
