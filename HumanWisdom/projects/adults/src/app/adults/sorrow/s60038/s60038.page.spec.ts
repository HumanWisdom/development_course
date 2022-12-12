import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60038Page } from './s60038.page';

describe('S60038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60038Page;
  let fixture: ComponentFixture<S60038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
