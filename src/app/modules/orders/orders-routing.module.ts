import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'cart',
    component: PlaceOrderComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
