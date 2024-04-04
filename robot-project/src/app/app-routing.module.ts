import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home - Robot Store"},
  {path: 'catalog', component: CatalogComponent, title: "Catalog - Robot Store"},
  {path: 'cart', component: CartComponent, title: "Cart - Robot Store"},
  {path: 'sign-in', component: SignInComponent, title: "Sign In - Robot Store"},
  {path: 'form-controls', component: TemplateFormControlsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
