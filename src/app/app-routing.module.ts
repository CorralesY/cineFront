import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SeatingComponent } from './dashboard/seating/seating/seating.component';
import { SliderComponent } from './dashboard/slider/slider.component';
import { RegisterComponent } from './user/register/register.component';
import { QuestionsComponent } from './spa/questions/questions/questions.component';




const routes: Routes = [
  {
    path: '', component: AppComponent, children:
      [
        {
          path: "", component: HomeComponent, pathMatch: 'full'
        },
        {
          path: "home", component: HomeComponent, pathMatch: 'full'
        },
        {
          path: "dasboard", component: DashboardComponent, pathMatch: 'full'
        },
        {
          path: "resgister", component: RegisterComponent, pathMatch: 'full'
        },
        {
          path: "questions", component: QuestionsComponent, pathMatch: 'full'
        },

      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
