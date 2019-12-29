import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeItemComponent } from './nike-item.component';

describe('NikeItemComponent', () => {
  let component: NikeItemComponent;
  let fixture: ComponentFixture<NikeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NikeItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
