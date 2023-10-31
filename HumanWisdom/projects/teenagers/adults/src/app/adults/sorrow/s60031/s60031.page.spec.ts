import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60031Page } from './s60031.page';

describe('S60031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60031Page;
  let fixture: ComponentFixture<S60031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
