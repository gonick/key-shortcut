import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { KeyShortcutDirective } from "./key-shortcut/key-shortcut.directive";
import { SummaryComponent } from "./summary/summary/summary.component";
import { Comp2Component } from "./comp2/comp2/comp2.component";
import { Comp3Component } from "./comp3/comp3/comp3.component";

@NgModule({
  declarations: [
    AppComponent,
    KeyShortcutDirective,
    SummaryComponent,
    Comp2Component,
    Comp3Component,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
