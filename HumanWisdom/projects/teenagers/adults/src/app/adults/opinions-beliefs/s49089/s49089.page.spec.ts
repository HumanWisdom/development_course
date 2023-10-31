import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49089Page } from './s49089.page';

describe('S49089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49089Page;
  let fixture: ComponentFixture<S49089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
