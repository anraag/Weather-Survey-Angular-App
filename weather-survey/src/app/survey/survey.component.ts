import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];

  questions = [];
  constructor() {}

  ngOnInit(): void {
    this.questions = [
      {
        q: "are you anurag?",
        options: ["yes", "no", "maybe", "who cares?"],
      },
      {
        q: "are you not?",
        options: ["yes", "no", "maybe", "who cares?"],
      },
      {
        q: "are you blahblah?",
        options: ["yes", "no", "maybe", "who cares?"],
      },
    ];
  }
}
