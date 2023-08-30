import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140050Page } from './s140050.page';

describe('S140050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140050Page;
  let fixture: ComponentFixture<S140050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
