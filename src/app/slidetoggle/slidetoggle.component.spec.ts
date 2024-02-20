import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetoggleComponent } from './slidetoggle.component';

describe('SlidetoggleComponent', () => {
  let component: SlidetoggleComponent;
  let fixture: ComponentFixture<SlidetoggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SlidetoggleComponent]
    });
    fixture = TestBed.createComponent(SlidetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
