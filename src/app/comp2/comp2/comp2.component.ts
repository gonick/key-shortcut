import { Component, OnInit } from "@angular/core";
import { IShortcut } from "src/app/key-shortcut/interface";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.scss"],
})
export class Comp2Component implements OnInit {
  shortcuts: IShortcut[] = [
    {
      keys: "shift g",
      description: "toggle between green and blue on pressing shift + g ",
      callback: this.changeColor.bind(this),
    },
    {
      keys: "shift p",
      description: "toggle between green and blue on pressing shift + p ",
      callback: this.log.bind(this),
    },
  ];
  colorGreen: boolean = true;
  constructor() {}

  ngOnInit() {}

  changeColor() {
    this.colorGreen = !this.colorGreen;
  }

  log() {
    console.log("shift + p is pressed");
  }
}
