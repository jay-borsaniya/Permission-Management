import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagePermissionComponent } from './manage-permission/manage-permission.component';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { PermissionComponent } from './manage-permission/permission/permission.component';
import { SharedComponent } from './manage-permission/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ManagePermissionComponent,
    PermissionComponent,
    SharedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CdkAccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
