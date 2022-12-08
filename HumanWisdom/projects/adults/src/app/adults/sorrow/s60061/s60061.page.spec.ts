import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60061Page } from './s60061.page';

describe('S60061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60061Page;
  let fixture: ComponentFixture<S60061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
