import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './test/test.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './pages/login/login.component';
import { IntroCardComponent } from './components/intro-card/intro-card.component';
import { VideoComponent } from './components/video/video.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FreeTrialComponent } from './components/free-trial/free-trial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { TrustedCompaniesComponent } from './components/trusted-companies/trusted-companies.component';
import { HomeHelpComponent } from './components/home-help/home-help.component';
import { AnnouncementCardComponent } from './components/announcement-card/announcement-card.component';
import { CommunityAnnouncementHomeComponent } from './components/community-announcement-home/community-announcement-home.component';
import { Test2Component } from './test2/test2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpBottomSheetComponent } from './components/help-bottom-sheet/help-bottom-sheet.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './pages/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { TrainerService } from './services/trainer.service';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewComponent } from './pages/review/review.component';
import { NursingCourseComponent } from './pages/nursing-course/nursing-course.component';
import { NutrionistCourseComponent } from './pages/nutrionist-course/nutrionist-course.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PharmacistCoursesComponent } from './pages/pharmacist-courses/pharmacist-courses.component';
import { DoctorCoursesComponent } from './pages/doctor-courses/doctor-courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TestComponent,
    IntroComponent,
    LoginComponent,
    IntroCardComponent,
    VideoComponent,
    FeaturedComponent,
    FreeTrialComponent,
    CardComponent,
    TrustedCompaniesComponent,
    HomeHelpComponent,
    AnnouncementCardComponent,
    CommunityAnnouncementHomeComponent,
    Test2Component,
    HelpBottomSheetComponent,
    FAQComponent,
    ContactUsComponent,
    SigninComponent,
    AnnouncementsComponent,
    FooterComponent,
    ReviewComponent,
    NursingCourseComponent,
    NutrionistCourseComponent,
    CoursesCardComponent,
    ForgotPasswordComponent,
    PharmacistCoursesComponent,
    DoctorCoursesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [TrainerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }