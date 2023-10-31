import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46045Page } from './s46045.page';

describe('S46045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46045Page;
  let fixture: ComponentFixture<S46045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
