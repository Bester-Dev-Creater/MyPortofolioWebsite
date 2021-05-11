import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

var firebaseConfig = {
  apiKey: "AIzaSyAtc3fWCpGmMa1qHmdyp_BO4yXlUzLqLJ8",
  authDomain: "charl-bester.firebaseapp.com",
  projectId: "charl-bester",
  storageBucket: "charl-bester.appspot.com",
  messagingSenderId: "361341194148",
  appId: "1:361341194148:web:7abf86b2bae1f97ed7fb31",
  measurementId: "G-9S1C3P7XRJ"

}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    PersonalProjectsComponent,
    ContactComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
