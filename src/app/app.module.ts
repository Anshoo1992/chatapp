import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import {AppRouterModule} from './app-router.module';
import {DemoMaterialModule} from '../angular-material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AddcontactsComponent } from './components/addcontacts/addcontacts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    HomePageComponent,
    ConversationComponent,
    UserProfileComponent,
    ListItemComponent,
    AddcontactsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    AppRouterModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AddcontactsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
