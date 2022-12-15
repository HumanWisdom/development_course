import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60013Page } from './s60013.page';

describe('S60013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60013Page;
  let fixture: ComponentFixture<S60013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
