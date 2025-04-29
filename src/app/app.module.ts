import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { EnrollnowComponent } from './enrollnow/enrollnow.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LessonComponent } from './lesson/lesson.component';
import { AboutComponent } from './about/about.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistorieComponent } from './historie/historie.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { MyquizComponent } from './myquiz/myquiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ProfileComponent,
    EnrollnowComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    CourseDetailComponent,
    LessonComponent,
    AboutComponent,
    AnnouncementsComponent,
    LogoutComponent,
    DashboardComponent,
    HistorieComponent,
    ChatbotComponent,
    MyquizComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
