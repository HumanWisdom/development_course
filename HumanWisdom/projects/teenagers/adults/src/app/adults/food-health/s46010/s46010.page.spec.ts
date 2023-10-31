import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46010Page } from './s46010.page';

describe('S46010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46010Page;
  let fixture: ComponentFixture<S46010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
