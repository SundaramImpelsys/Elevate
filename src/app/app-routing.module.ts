import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import {FAQComponent} from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  { path: 'FAQ', component: FAQComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path:'announcement', component: AnnouncementsComponent},
  { path:'review', component: ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
