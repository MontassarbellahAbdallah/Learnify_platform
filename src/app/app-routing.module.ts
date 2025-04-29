import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AllCoursesComponent } from './courses/all-courses/all-courses.component';
import { CousesListComponent } from './courses/couses-list/couses-list.component';
import { ProfileComponent } from './profile/profile.component';
import { EnrollnowComponent } from './enrollnow/enrollnow.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LessonComponent } from './lesson/lesson.component';
import { AboutComponent } from './about/about.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistorieComponent } from './historie/historie.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ContactComponent } from './contact/contact.component';






const routes: Routes = [

  { path: '', component:HomeComponent },
  { path: 'Home', component:HomeComponent},
  { path: 'About', component:AboutComponent},
  { path: 'courses-list', component:CousesListComponent},
  { path: 'Announcements', component:AnnouncementsComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'course-detail', component:CourseDetailComponent},
  { path: 'historie', component:HistorieComponent},
  { path: 'Courses', component:CoursesComponent },
  { path: 'all-courses', component:AllCoursesComponent },
  { path: 'signin', component:SigninComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'lesson', component:LessonComponent},
  { path: 'chatbot', component:ChatbotComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'profile', component:ProfileComponent },
  { path: 'enrollnow', component:EnrollnowComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
