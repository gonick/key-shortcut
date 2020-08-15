import { Component, OnInit } from "@angular/core";
import { KeyShortcutService } from "src/app/key-shortcut/key-shortcut.service";
import { IActiveListeners } from "src/app/key-shortcut/interface";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  constructor(public keyShortcutService: KeyShortcutService) {}

  ngOnInit() {}

  trackByValue(index: number, item: IActiveListeners) {
    return item.name;
  }
}
