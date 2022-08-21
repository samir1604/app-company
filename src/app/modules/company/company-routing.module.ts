import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCompanyComponent } from './pages/main-company/main-company.component';

const routes: Routes = [
	{ path: '', redirectTo: 'list-company', pathMatch: 'full' },
	{
		path: 'list-company',
		component: MainCompanyComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CompanyRoutingModule {}
