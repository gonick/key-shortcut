import { TestBed } from '@angular/core/testing';

import { KeyShortcutService } from './key-shortcut.service';

describe('KeyShortcutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyShortcutService = TestBed.get(KeyShortcutService);
    expect(service).toBeTruthy();
  });
});
