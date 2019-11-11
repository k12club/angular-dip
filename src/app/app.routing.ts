import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";
import { ManageDatabaseComponent } from "./views/admin/manage-database/manage-database.component";
import { MainComponent } from "./views/admin/main/main.component";
import { LoginComponent } from "./views/login/login.component";
import { AuthGuard } from "./shared/core/auth.guard";
export const routes: Routes = [
  // { path: '**', redirectTo: '' },
  {
    path: "login",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  // {
  //   path:'dashboard',

  // },

  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "หน้าหลัก"
    },
    children: [
      {
        path: "admin/main",
        component: MainComponent,
        canActivate: [AuthGuard]
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      // },
      {
        path: "admin/managedatabase",
        component: ManageDatabaseComponent,
        canActivate: [AuthGuard],
        data: {
          title: "คลาสผลิตภัณฑ์"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
