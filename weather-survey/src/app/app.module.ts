import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatRadioModule } from "@angular/material/radio";
import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey/survey.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, SurveyComponent],
  imports: [BrowserModule, MatRadioModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
