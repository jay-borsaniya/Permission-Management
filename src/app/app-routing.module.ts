import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePermissionComponent } from './manage-permission/manage-permission.component';
import { SharedComponent } from './manage-permission/shared/shared.component';

const routes: Routes = [
  { path: '', redirectTo: 'permissions', pathMatch: 'full' },
  { path: 'permissions', component: ManagePermissionComponent },
  { path: ':name', component: SharedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
