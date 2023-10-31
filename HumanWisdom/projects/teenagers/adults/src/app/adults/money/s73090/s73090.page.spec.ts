import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73090Page } from './s73090.page';

describe('S73090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73090Page;
  let fixture: ComponentFixture<S73090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
