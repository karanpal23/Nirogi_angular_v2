import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCatComponent } from './AllComponents/Users/FirstScreeningPages/first-cat/first-cat.component';
import { SecondCatComponent } from './AllComponents/Users/FirstScreeningPages/second-cat/second-cat.component';
import { ThirdCatComponent } from './AllComponents/Users/FirstScreeningPages/third-cat/third-cat.component';
import { FourthCatComponent } from './AllComponents/Users/FirstScreeningPages/fourth-cat/fourth-cat.component';
import { FifthCatComponent } from './AllComponents/Users/FirstScreeningPages/fifth-cat/fifth-cat.component';
import { SixthCatComponent } from './AllComponents/Users/FirstScreeningPages/sixth-cat/sixth-cat.component';
import { SixthCatogComponent } from './AllComponents/Users/SecondScreeningPages/sixth-catog/sixth-catog.component';
import { FifthCatogComponent } from './AllComponents/Users/SecondScreeningPages/fifth-catog/fifth-catog.component';
import { FourthCatogComponent } from './AllComponents/Users/SecondScreeningPages/fourth-catog/fourth-catog.component';
import { ThirdCatogComponent } from './AllComponents/Users/SecondScreeningPages/third-catog/third-catog.component';
import { SecondCatogComponent } from './AllComponents/Users/SecondScreeningPages/second-catog/second-catog.component';
import { FirstCatogComponent } from './AllComponents/Users/SecondScreeningPages/first-catog/first-catog.component';
import { ViewFirstCatogComponent } from './AllComponents/Users/ViewScreenedPages/view-first-catog/view-first-catog.component';
import { ViewSecondCatogComponent } from './AllComponents/Users/ViewScreenedPages/view-second-catog/view-second-catog.component';
import { ViewThirdCatogComponent } from './AllComponents/Users/ViewScreenedPages/view-third-catog/view-third-catog.component';
import { ViewFourthCatogComponent } from './AllComponents/Users/ViewScreenedPages/view-fourth-catog/view-fourth-catog.component';
import { ViewFifthCatogComponent } from './AllComponents/Users/ViewScreenedPages/view-fifth-catog/view-fifth-catog.component';
import { ViewSixthCatogComponent } from './AllComponents/Users/ViewScreenedPages/view-sixth-catog/view-sixth-catog.component';
import { AddUsersComponent } from './AllComponents/Admin/add-users/add-users.component';
import { DashboardComponent } from './AllComponents/DashBoard/dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
    FirstCatComponent,
    SecondCatComponent,
    ThirdCatComponent,
    FourthCatComponent,
    FifthCatComponent,
    SixthCatComponent,
    SixthCatogComponent,
    FifthCatogComponent,
    FourthCatogComponent,
    ThirdCatogComponent,
    SecondCatogComponent,
    FirstCatogComponent,
    ViewFirstCatogComponent,
    ViewSecondCatogComponent,
    ViewThirdCatogComponent,
    ViewFourthCatogComponent,
    ViewFifthCatogComponent,
    ViewSixthCatogComponent,
    AddUsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    IonicModule.forRoot({})
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
