import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegalosComponent } from './regalos.component';

describe('RegalosComponent', () => {
  let component: RegalosComponent;
  let fixture: ComponentFixture<RegalosComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegalosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
