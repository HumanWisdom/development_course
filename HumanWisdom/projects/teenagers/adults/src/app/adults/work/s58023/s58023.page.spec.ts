import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58023Page } from './s58023.page';

describe('S58023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58023Page;
  let fixture: ComponentFixture<S58023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
