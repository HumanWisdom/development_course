import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46048Page } from './s46048.page';

describe('S46048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46048Page;
  let fixture: ComponentFixture<S46048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
