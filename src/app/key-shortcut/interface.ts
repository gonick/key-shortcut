export interface IShortcut extends IActiveListenerShortcut {
  callback: () => void;
}

export interface IActiveListeners {
  name: string;
  shortcuts: IActiveListenerShortcut[];
}

export interface IActiveListenerShortcut {
  description: string;
  keys: string;
}
