import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//-------------------------- General Compoents ----------------------------
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ToolbarComponent } from './components/pages/layouts/toolbar/toolbar.component';
import { SettingsComponent } from './components/administration/settings/settings.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
//-------------------------- Settings Components ----------------------------
import { Page404Component } from './shared/components/page-404/page-404.component';
//-------------------------- Guards ----------------------------
import { adminGuard } from './shared/guards/admin.guard';
import { authGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { PivotComponent } from './components/pages/pivot/pivot.component';
import { ClaimsComponent } from './components/pages/claims/claims.component';
import { VistaComponent } from './components/pages/vista/vista.component';
import { ReadyComponent } from './components/pages/ready/ready.component';
//-------------------------Shared--------------------------------------
import { ScoreCardComponent } from './shared/components/score-card/score-card.component';
import { IndividualScoreCardComponent } from './shared/components/individual-score-card/individual-score-card.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},

  {
    path: '',
    component: ToolbarComponent,
    children: [

      // { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'privacy', component: PrivacyComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'pivot', component: PivotComponent},
      { path: 'claims', component: ClaimsComponent},
      { path: 'vista', component: VistaComponent},
      { path: 'ready', component: ReadyComponent},
      { path: 'scorecard', component: ScoreCardComponent},
      { path: 'individual', component: IndividualScoreCardComponent},


      {
        path: 'administration',
        loadChildren: () => import('./components/administration/administration.module').then(m => m.AdministrationModule),
        // canActivateChild: [adminGuard]
      },

      { path: 'settings', component: SettingsComponent },
    ],
    // canActivateChild: [authGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: 'page404', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
