import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicComponent } from './Components/pic/pic.component';
import { SocialComponent } from './Components/social/social.component';
import { DescriptionComponent } from './Components/description/description.component';
import { InterestsComponent } from './Components/interests/interests.component';
import { UserService } from './Services/user.service';
import { ExperienceComponent } from './Components/experience/experience.component';
import { CertificateComponent } from './Components/certificate/certificate.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    SocialComponent,
    DescriptionComponent,
    InterestsComponent,
    ExperienceComponent,
    CertificateComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule, AngularMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
