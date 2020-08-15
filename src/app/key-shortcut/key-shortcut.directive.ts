import { Directive, OnInit, Input, OnDestroy } from "@angular/core";
import { KeyShortcutService } from "./key-shortcut.service";
import { IShortcut, IActiveListeners } from "./interface";

@Directive({
  selector: "[appKeyShortcut]",
})
export class KeyShortcutDirective implements OnInit, OnDestroy {
  private _registeredListeners; //listener reference to deregister key shortcuts
  private _disable: boolean; //enable disable directive while component is still mounted

  @Input("shortcuts") shortcuts: IShortcut[]; //list of shortcuts
  @Input("name") name: string; //unique name of the component

  @Input("disable") set disable(val: boolean) {
    this._disable = val;
    this.removeListener();
    if (!val) {
      this.registerShortcuts();
    }
  }

  constructor(private keyShortcutService: KeyShortcutService) {}

  ngOnInit() {
    if (this._disable === undefined) this.registerShortcuts();
  }

  private registerShortcuts() {
    if (!this.shortcuts) return;

    const listener = this.keyShortcutService.listener; //get singleton listener reference
    const listenersForLib = this.shortcuts.map((shortcut) => ({
      keys: shortcut.keys,
      on_keydown: () => {
        console.log("ACTION TRIGGERED for ", this.name);
        shortcut.callback();
      },
    }));
    this.addListener();
    this._registeredListeners = listener.register_many(listenersForLib); //to deregister on destroy
  }

  private addListener() {
    //add to service so that it's globally available for summary comp
    const listeners: IActiveListeners = {
      name: this.name,
      shortcuts: this.shortcuts.map((shortcut) => ({
        description: shortcut.description,
        keys: shortcut.keys,
      })),
    };
    this.keyShortcutService.addListener(listeners);
  }

  private removeListener() {
    //remove from service and unregister from the lib as well
    this.keyShortcutService.removeListener(this.name);
    if (this._registeredListeners) {
      const listener = this.keyShortcutService.listener;
      listener.unregister_many(this._registeredListeners);
    }
  }

  ngOnDestroy() {
    this.removeListener();
  }
}
