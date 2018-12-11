import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicComponent } from '../Components/pic/pic.component';
import { SocialComponent } from '../Components/social/social.component';
import { DescriptionComponent } from '../Components/description/description.component';
import { InterestsComponent } from '../Components/interests/interests.component';


@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    SocialComponent,
    DescriptionComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }