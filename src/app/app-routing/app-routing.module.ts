import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BayersComponent } from '../components/bayers/bayers.component';
import { BayersDetailComponent } from '../components/bayers/bayers-detail/bayers-detail.component';
import { ProductsComponent } from '../components/products/products.component';

const appRoutes: Routes = [
{
	path: 'products',
	component: ProductsComponent,
},
{
	path: 'bayers',
	
	children: [ 

	{	
		path: '',
		component: BayersComponent
	},
	{
		path: ':id',
		component: BayersDetailComponent,
	}
	]
}
];

@NgModule({
	imports:[
	RouterModule.forRoot(
		appRoutes
		)
	], 
	exports: [
	RouterModule
	]
})

export class AppRoutingModule {}