import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesectionsComponent } from './sitesections.component';

describe('SitesectionsComponent', () => {
  let component: SitesectionsComponent;
  let fixture: ComponentFixture<SitesectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
