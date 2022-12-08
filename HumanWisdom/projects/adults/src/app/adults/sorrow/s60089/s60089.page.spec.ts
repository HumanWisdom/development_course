import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60089Page } from './s60089.page';

describe('S60089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60089Page;
  let fixture: ComponentFixture<S60089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
