# KeyShortcut

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

This library contains directives to enable keyboard shortcuts.

# Usage

In your angular component add the directive `appKeyShortcut` to enable the plugin

```
<div>

<Child
appKeyShortcut
[shortcuts]="shortcuts" // IShortcut[]. array of type IShortcut
[disable]="true" // a variable to control state (optional). Default is false
name="Child" // name, to uniquly identify the comp
>
</Child>

</div>

```

# inputs

Shortcuts is an array which allows you to register multiple shortcuts and their callback for components. Shortcut interface looks like as follows

```
IShortcut {
  description : string // description of the shortcut keys
  keys: string // eg 'ctrl s'
  callback: ()=>void // callback function
}
```

disable parameter allows you to disable/enable the directive while the component is still mounted.

# Active Shortcuts

List of Active shortcuts can be accessed through the service that is exposed by the directive.
The response form the observable is of type IActiveShortcuts[]. It is an array of all the available listeners.

```
shortcutService.activeListeners$  // observable that emits the updated list of shortcuts

IActiveShortcuts {
  name:string,
  shortcuts: [{
    description: string,
    keys: string
  }]
}
```
