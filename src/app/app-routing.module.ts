import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'company', pathMatch: 'full' },
	{
		path: 'company',
		loadChildren: () => import('@modules/company/company.module').then((m) => m.CompanyModule)
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
