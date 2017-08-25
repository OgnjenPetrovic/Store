import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BayersComponent } from '../components/bayers/bayers.component';
import { ProductsComponent } from '../components/products/products.component';

const appRoutes: Routes = [
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'bayers',
      component: BayersComponent
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