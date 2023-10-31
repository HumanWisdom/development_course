import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49102Page } from './s49102.page';

describe('S49102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49102Page;
  let fixture: ComponentFixture<S49102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
