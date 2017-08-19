import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ScreenComponent } from "./screen.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ScreenComponent", () => {

  let fixture: ComponentFixture<ScreenComponent>;
  let component: ScreenComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ScreenComponent]
    });

    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
