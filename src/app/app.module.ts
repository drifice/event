import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/sign/login/login.component';
import { RegisterComponent } from './pages/sign/register/register.component';
import { AddEventComponent } from './pages/composants/add-event/add-event.component';
import { EventComponent } from './pages/event/event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEventComponent } from './pages/composants/list-event/list-event.component';
import { DetailEventComponent } from './pages/composants/detail-event/detail-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddEventComponent,
    EventComponent,
    ListEventComponent,
    DetailEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
