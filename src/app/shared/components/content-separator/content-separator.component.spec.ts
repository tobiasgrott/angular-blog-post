import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSeparatorComponent } from './content-separator.component';

describe('ContentSeparatorComponent', () => {
  let component: ContentSeparatorComponent;
  let fixture: ComponentFixture<ContentSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
