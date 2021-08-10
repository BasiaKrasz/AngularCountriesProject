import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContinentComponent } from './pages/components/continent/continent.component';
import { CountryComponent } from './pages/components/country/country.component';

const routes: Routes = [
  { path: '', redirectTo: '/world', pathMatch: 'full' },
  {
    path: 'world',
    component: HomeComponent,
  },
  {
    path: 'region/:region',
    component: ContinentComponent,
  },
  { path: 'country/:country', component: CountryComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
