import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Comp2Component } from "./comp3.component";

describe("Comp2Component", () => {
  let component: Comp2Component;
  let fixture: ComponentFixture<Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Comp2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});