import { Routes } from '@angular/router';
import { HomeComponent } from './Navigation/home/home.component';
import { AboutComponent } from './Info/about/about.component';
import { FeaturesComponent } from './Info/features/features.component';
import { ContactComponent } from './Info/contact/contact.component';
import { RegisterComponent } from './reactiveForms/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'features', component: FeaturesComponent},
    { path: 'register', component: RegisterComponent}
];
