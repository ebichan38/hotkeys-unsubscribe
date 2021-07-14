import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoUnsubscribeComponent } from './no-unsubscribe/no-unsubscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

const routes: Routes = [
  {
    path: 'unsubscribe',
    component: UnsubscribeComponent
  },
  {
    path: 'no-unsubscribe',
    component: NoUnsubscribeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
