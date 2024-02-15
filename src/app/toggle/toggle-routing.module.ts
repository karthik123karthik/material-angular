import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';

const routes: Routes = [
{
 path:'',
 component:ToggleBtnComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleRoutingModule { }
