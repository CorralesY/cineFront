import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
///components//
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { NabvarComponent } from './shared/nabvar/nabvar/nabvar.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './dashboard/home/home/home.component';
import { ForgetComponent } from './user/forget/forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BuyComponent } from './spa/buy/buy/buy.component';
import { QuestionsComponent } from './spa/questions/questions/questions.component';
import { TermsComponent } from './spa/terms/terms/terms.component';
import { UsComponent } from './spa/us/us/us.component';
import { SeatingComponent } from './dashboard/seating/seating/seating.component';
import { CardsComponent } from "./dashboard/cards/cards.component";
import { SliderComponent } from './dashboard/slider/slider.component';
import { AdvertisingComponent } from './dashboard/advertising/advertising.component';

///pipes///
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    NabvarComponent,
    RegisterComponent,
    HomeComponent,
    ForgetComponent,
    DashboardComponent,
    BuyComponent,
    QuestionsComponent,
    TermsComponent,
    UsComponent,
    SeatingComponent,
    CardsComponent,
    SliderComponent,
    AdvertisingComponent,
    //pipes//
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
