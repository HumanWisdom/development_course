import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49081Page } from './s49081.page';

describe('S49081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49081Page;
  let fixture: ComponentFixture<S49081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
