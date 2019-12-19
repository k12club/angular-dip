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
        component: MainComponent
        // canActivate: [AuthGuard]
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      // },
      {
        path: "admin/managedatabase",
        loadChildren: () =>
          import("./views/admin/manage-database/manage-database.module").then(
            m => m.ManageDatabaseModule
          ),
        // canActivate: [AuthGuard],
        data: {
          title: "คลาสผลิตภัณฑ์"
        }
      },
      {
        path: "admin/managedatabase/class/:id",
        loadChildren: () =>
          import("./views/admin/sub-category/sub-category.module").then(
            m => m.SubCategoryModule
          ),
        // canActivate: [AuthGuard],
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
