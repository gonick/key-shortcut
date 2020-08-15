import { Component, OnInit } from "@angular/core";
import { IShortcut } from "./key-shortcut/interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  text = "Hello World";

  //shortcut for App comp text
  shortcuts: IShortcut[] = [
    {
      keys: "shift g",
      description: "change greeting text with shift + g ",
      callback: this.changeText.bind(this),
    },
  ];

  disable: boolean = false;
  enableCOMP3: boolean = true;

  ngOnInit() {}

  changeText() {
    if (this.text === "Hello World") {
      this.text = "Greetings";
    } else {
      this.text = "Hello World";
    }
  }

  toggle() {
    this.disable = !this.disable;
  }

  mountUnmount() {
    this.enableCOMP3 = !this.enableCOMP3;
  }
}
