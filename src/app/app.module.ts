import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ItemComponent } from './item/item.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material Module
import {MatSnackBarModule} from '@angular/material/snack-bar';
  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ItemComponent,
    PurchaseComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
