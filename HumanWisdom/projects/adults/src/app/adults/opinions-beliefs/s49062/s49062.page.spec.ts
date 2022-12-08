import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49062Page } from './s49062.page';

describe('S49062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49062Page;
  let fixture: ComponentFixture<S49062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
