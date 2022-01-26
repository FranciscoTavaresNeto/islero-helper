import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CalcComponent } from './calc/calc.component';
import { MaskAdminComponent } from './mask-admin/mask-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommitDeltaComponent } from './commit-delta/commit-delta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CalcComponent,
    MaskAdminComponent,
    DashboardComponent,
    CommitDeltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
