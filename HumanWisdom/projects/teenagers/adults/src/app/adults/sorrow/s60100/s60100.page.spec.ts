import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60100Page } from './s60100.page';

describe('S60100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60100Page;
  let fixture: ComponentFixture<S60100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
