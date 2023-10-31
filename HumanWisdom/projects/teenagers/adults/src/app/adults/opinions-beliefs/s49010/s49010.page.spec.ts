import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49010Page } from './s49010.page';

describe('S49010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49010Page;
  let fixture: ComponentFixture<S49010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
