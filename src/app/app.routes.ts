import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PrivacypolicyComponent } from './components/privacypolicy.component';
import { TermsOfServiceComponent } from './components/terms-of-service.component';
import { SupportComponent } from './components/support.component';

export const routes: Routes = [
  {
    path: '',
    title: 'PrasunChakra',
    component: HomeComponent,
  },
  {
    path: 'privacy-policy',
    title: 'PrasunChakra',
    component: PrivacypolicyComponent,
  },
  {
    path: 'terms-of-service',
    title: 'PrasunChakra',
    component: TermsOfServiceComponent,
  },
  {
    path: 'support',
    title: 'PrasunChakra',
    component: SupportComponent,
  },
  {
    path: '**',
    title: 'PrasunChakra',
    component: HomeComponent,
  },
];
