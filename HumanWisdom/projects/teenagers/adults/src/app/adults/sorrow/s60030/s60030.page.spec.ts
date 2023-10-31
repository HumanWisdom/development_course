import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60030Page } from './s60030.page';

describe('S60030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60030Page;
  let fixture: ComponentFixture<S60030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
