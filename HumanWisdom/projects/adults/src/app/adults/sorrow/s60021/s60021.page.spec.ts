import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60021Page } from './s60021.page';

describe('S60021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60021Page;
  let fixture: ComponentFixture<S60021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
