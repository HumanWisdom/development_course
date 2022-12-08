import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49013Page } from './s49013.page';

describe('S49013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49013Page;
  let fixture: ComponentFixture<S49013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
