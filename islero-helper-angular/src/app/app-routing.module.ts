import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { CommitDeltaComponent } from './commit-delta/commit-delta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MaskAdminComponent } from './mask-admin/mask-admin.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'calc', component: CalcComponent
  },
  {
    path: 'commit-delta', component: CommitDeltaComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'mask-admin', component: MaskAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
