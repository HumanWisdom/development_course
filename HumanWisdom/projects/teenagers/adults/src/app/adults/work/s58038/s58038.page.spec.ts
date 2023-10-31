import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58038Page } from './s58038.page';

describe('S58038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58038Page;
  let fixture: ComponentFixture<S58038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
