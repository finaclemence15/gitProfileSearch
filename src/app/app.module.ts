import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDescriptionComponent } from './user-description/user-description.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { BolderDirective } from './bolder.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDescriptionComponent,
    GithubProfileComponent,
    BolderDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
