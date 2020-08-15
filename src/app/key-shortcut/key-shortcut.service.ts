import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IActiveListeners } from "./interface";

@Injectable({
  providedIn: "root",
})
export class KeyShortcutService {
  private _listener: any;

  private availableListeners: IActiveListeners[] = [];
  activeListeners$: BehaviorSubject<IActiveListeners[]> = new BehaviorSubject(
    []
  );

  constructor() {}

  get listener() {
    if (!this._listener) this.createListener();

    return this._listener;
  }

  private createListener() {
    this._listener = new (window as any).keypress.Listener();
  }

  addListener(listener: IActiveListeners) {
    this.availableListeners.push(listener);
    this.emitListener();
  }

  removeListener(name: string) {
    const index = this.availableListeners.findIndex(
      (item) => item.name === name
    );

    if (index !== -1) this.availableListeners.splice(index, 1);
    // else throw new Error("Listener already removed");

    this.emitListener();
  }

  private emitListener() {
    this.activeListeners$.next(this.availableListeners);
  }
}
