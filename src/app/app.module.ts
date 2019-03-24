import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav.component';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,
    HttpClientModule
  ],
  providers: [ WebService, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
