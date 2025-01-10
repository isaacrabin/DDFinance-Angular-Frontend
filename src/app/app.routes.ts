import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: LayoutsComponent,
    children:[
      {
        path: "",
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'policies',
        component: PoliciesComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
    ]
  }
];
