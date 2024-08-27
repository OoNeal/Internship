import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { IntroComponent } from './intro/intro.component';
import { GroupComponent } from './group/group.component';
import { CompanyComponent } from './company/company.component';
import { InfoDepComponent } from './info-dep/info-dep.component';
import { KeyComponent } from './key/key.component';
import { TechnoComponent } from './techno/techno.component';
import { MethodComponent } from './method/method.component';
import { GitComponent } from './git/git.component';
import { DayComponent } from './day/day.component';
import { MissionComponent } from './mission/mission.component';
import { CypressComponent } from './mission/cypress/cypress.component';
import { FullstackComponent } from './mission/fullstack/fullstack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ThanksComponent,
    IntroComponent,
    GroupComponent,
    CompanyComponent,
    InfoDepComponent,
    KeyComponent,
    TechnoComponent,
    MethodComponent,
    GitComponent,
    DayComponent,
    MissionComponent,
    CypressComponent,
    FullstackComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
