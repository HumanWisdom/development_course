import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49077Page } from './s49077.page';

describe('S49077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49077Page;
  let fixture: ComponentFixture<S49077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
