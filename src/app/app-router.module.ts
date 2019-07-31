import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserDetailComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
