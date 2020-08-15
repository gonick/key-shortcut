import { Component, OnInit } from "@angular/core";
import { IShortcut } from "src/app/key-shortcut/interface";

@Component({
  selector: "app-comp3",
  templateUrl: "./comp3.component.html",
  styleUrls: ["./comp3.component.scss"],
})
export class Comp3Component implements OnInit {
  shortcuts: IShortcut[] = [
    {
      keys: "shift g",
      description: "change color for COMP3 with shift + g",
      callback: this.changeColor.bind(this),
    },
  ];

  colorGreen: boolean;

  constructor() {}

  ngOnInit() {}

  changeColor() {
    this.colorGreen = !this.colorGreen;
  }
}
